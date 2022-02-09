import StripeLibrary from 'stripe'

class StripeService {
  private static instance : StripeService;
  public readonly stripe : StripeLibrary;

  private constructor() {
    this.stripe = new StripeLibrary(process.env.STRIPE_SECRET_KEY, {apiVersion: null});
  }

  public static get Instance(): StripeLibrary {
    if (! StripeService.instance) {
      StripeService.instance = new StripeService();
    }

    return StripeService.instance.stripe;
  }
}

export const Stripe = StripeService.Instance;
