import React, { useEffect, useRef, useState } from 'react';

// Whop Elements is loaded by the <script data-whop-elements> tag in index.html.
declare global {
  interface Window {
    WhopElements?: () => {
      checkout: {
        create: (options: Record<string, unknown>) => {
          create: (type: 'checkout') => { mount: (target: string | HTMLElement) => void };
          teardown?: () => void;
        };
      };
    };
  }
}

const AFTER_PURCHASE = `${window.location.origin}/completedpurchase`;

// Financing and bank-redirect methods (ClarityPay, Klarna, …) finish away from this page, and Whop
// sends the buyer back here with ?payment=…&status=…. Cards and wallets never leave the page and keep
// their normal redirect. Only an approved payment moves on; anything else stays on checkout.
const RETURN = (() => {
  const here = new URL(window.location.href);
  const payment = here.searchParams.get('payment');
  const status = here.searchParams.get('status');
  here.searchParams.delete('payment');
  here.searchParams.delete('status');
  here.hash = '';
  if (payment) history.replaceState(history.state, '', here.pathname + here.search + window.location.hash);
  const allowed = here.protocol === 'https:' || ['localhost', '127.0.0.1', '[::1]'].includes(here.hostname);
  return { url: allowed ? here.href : null, payment, status: payment ? status : null };
})();

if (RETURN.status === 'succeeded' && RETURN.payment) {
  const next = new URL(AFTER_PURCHASE);
  next.searchParams.set('payment_id', RETURN.payment);
  next.searchParams.set('receipt_id', RETURN.payment);
  next.searchParams.set('status', 'success');
  window.location.replace(next.href);
}

const APPEARANCE = {
  theme: { appearance: 'light' },
  classes: {
    'whop-CheckoutPayButton': { backgroundColor: '#fa4616', borderColor: '#fa4616', color: '#ffffff' },
    // The page provides its own context, so the seller row and logo stay hidden.
    'whop-CheckoutSeller': { display: 'none' },
    'whop-CheckoutSellerLogo': { display: 'none' },
    // Promo code UI stays hidden; the total, renewal line and cart items stay inline.
    'whop-CheckoutDetailsToggle': { display: 'none' },
    'whop-CheckoutPromoRow': { display: 'none' },
    'whop-CheckoutPromoChip': { display: 'none' },
    'whop-CheckoutPromoInput': { display: 'none' },
    'whop-CheckoutPromoApply': { display: 'none' },
    'whop-CheckoutPromoActions': { display: 'none' },
    'whop-CheckoutPromoApplied': { display: 'none' },
    'whop-CheckoutPromoDiscount': { display: 'none' },
    'whop-CheckoutPromoPeriod': { display: 'none' },
  },
};

interface WhopElementsCheckoutProps {
  planId: string;
  // The base plan when planId is an add-on bundle, recorded on payment.metadata.
  upgradedFrom?: string;
  fallback?: React.ReactNode;
}

const WhopElementsCheckout: React.FC<WhopElementsCheckoutProps> = ({ planId, upgradedFrom, fallback }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    if (RETURN.status === 'succeeded' || !containerRef.current || !window.WhopElements) return;
    // Pages render separate mobile and desktop slots; skip the one hidden by CSS.
    if (containerRef.current.offsetParent === null) return;
    setReady(false);
    // Options lock when the checkout is created, so a plan change recreates the element.
    const target = document.createElement('div');
    containerRef.current.appendChild(target);
    const handle = window.WhopElements().checkout.create({
      plan: planId,
      ...(RETURN.url ? { returnUrl: RETURN.url } : {}),
      metadata: upgradedFrom ? { source: 'landing', upgraded_from: upgradedFrom } : { source: 'landing' },
      appearance: APPEARANCE,
    });
    handle.create('checkout').mount(target);
    setReady(true);
    return () => {
      handle.teardown?.();
      target.remove();
    };
  }, [planId, upgradedFrom]);

  const failed = RETURN.status === 'failed' || RETURN.status === 'canceled';

  return (
    <div>
      {failed && (
        <div role="status" className="text-sm text-red-700 mb-2">
          Your payment wasn’t completed. Try again or choose another payment method.
        </div>
      )}
      {!ready && fallback}
      <div ref={containerRef} />
    </div>
  );
};

export default WhopElementsCheckout;
