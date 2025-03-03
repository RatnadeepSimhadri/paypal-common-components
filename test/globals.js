/* @flow */

export const fundingEligibility = {
  bancontact: {
    eligible: false,
  },
  card: {
    eligible: true,
    isPayPalBranded: true,

    vendors: {
      visa: {
        eligible: true,
      },
      mastercard: {
        eligible: true,
      },
      amex: {
        eligible: true,
      },
      discover: {
        eligible: true,
      },
      hiper: {
        eligible: false,
      },
      elo: {
        eligible: false,
      },
      jcb: {
        eligible: false,
      },
    },
  },
  credit: {
    eligible: false,
  },
  sepa: {
    eligible: false,
  },
  eps: {
    eligible: false,
  },
  giropay: {
    eligible: false,
  },
  ideal: {
    eligible: false,
  },
  mybank: {
    eligible: false,
  },
  p24: {
    eligible: false,
  },
  paypal: {
    eligible: true,
  },
  sofort: {
    eligible: false,
  },
  venmo: {
    eligible: false,
  },
  wechatpay: {
    eligible: false,
  },
  boleto: {
    eligible: false,
  },
  boletobancario: {
    eligible: false,
  },
  multibanco: {
    eligible: false,
  },
  satispay: {
    eligible: false,
  },
  paidy: {
    eligible: false,
  },
};

export const testGlobals = {
  __paypal_checkout__: {
    serverConfig: {
      fundingEligibility: (): string =>
        `window.__TEST_FUNDING_ELIGIBILITY__ || ${JSON.stringify(
          fundingEligibility
        )}`,
    },
  },

  __PAYPAL_CHECKOUT__: {
    __REMEMBERED_FUNDING__: (): string =>
      "window.__TEST_REMEMBERED_FUNDING__ || []",
  },

  __PORT__: 8000,
  __STAGE_HOST__: "msmaster.qa.paypal.com",
  __HOST__: "test.paypal.com",
  __HOSTNAME__: "test.paypal.com",
  __SDK_HOST__: "test.paypal.com",
  __PATH__: "/sdk/js",
  __VERSION__: "1.0.55",
  __NAMESPACE__: "paypal",
  __COMPONENTS__: ["buttons"],
  __CORRELATION_ID__: "abc123",
  __CLIENT_ID__: "abcxyz123",
  __MERCHANT_ID__: ["abc"],
};
