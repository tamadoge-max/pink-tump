export type LaunchWtf = {
  version: "0.1.0";
  name: "launch_wtf";
  instructions: [
    {
      name: "initMainState";
      accounts: [
        {
          name: "owner";
          isMut: true;
          isSigner: true;
        },
        {
          name: "mainState";
          isMut: true;
          isSigner: false;
        },
        {
          name: "systemProgram";
          isMut: false;
          isSigner: false;
        }
      ];
      args: [
        {
          name: "treasury";
          type: "publicKey";
        },
        {
          name: "tradingFeeBps";
          type: "u16";
        },
        {
          name: "seedFeeBps";
          type: "u16";
        },
        {
          name: "premiumFee";
          type: "u64";
        }
      ];
    },
    {
      name: "updateMainState";
      accounts: [
        {
          name: "owner";
          isMut: true;
          isSigner: true;
        },
        {
          name: "mainState";
          isMut: true;
          isSigner: false;
        }
      ];
      args: [
        {
          name: "input";
          type: {
            defined: "UpdateMainStateInput";
          };
        }
      ];
    },
    {
      name: "createCurve";
      accounts: [
        {
          name: "creator";
          isMut: true;
          isSigner: true;
        },
        {
          name: "metadata";
          isMut: true;
          isSigner: false;
        },
        {
          name: "mint";
          isMut: true;
          isSigner: false;
        },
        {
          name: "curveState";
          isMut: true;
          isSigner: false;
        },
        {
          name: "tokenReserve";
          isMut: true;
          isSigner: false;
        },
        {
          name: "mainState";
          isMut: true;
          isSigner: false;
        },
        {
          name: "treasury";
          isMut: true;
          isSigner: false;
        },
        {
          name: "tokenMetadataProgram";
          isMut: false;
          isSigner: false;
        },
        {
          name: "rent";
          isMut: false;
          isSigner: false;
        },
        {
          name: "systemProgram";
          isMut: false;
          isSigner: false;
        },
        {
          name: "tokenProgram";
          isMut: false;
          isSigner: false;
        },
        {
          name: "associatedTokenProgram";
          isMut: false;
          isSigner: false;
        },
        {
          name: "eventAuthority";
          isMut: false;
          isSigner: false;
        },
        {
          name: "program";
          isMut: false;
          isSigner: false;
        }
      ];
      args: [
        {
          name: "tokenParams";
          type: {
            defined: "TokenParams";
          };
        },
        {
          name: "curveParams";
          type: {
            defined: "CurveParams";
          };
        },
        {
          name: "randomSeed";
          type: "u64";
        }
      ];
    },
    {
      name: "swapExactSolForTokens";
      accounts: [
        {
          name: "user";
          isMut: true;
          isSigner: true;
        },
        {
          name: "mainState";
          isMut: true;
          isSigner: false;
        },
        {
          name: "curveState";
          isMut: true;
          isSigner: false;
        },
        {
          name: "mint";
          isMut: false;
          isSigner: false;
        },
        {
          name: "userMintAta";
          isMut: true;
          isSigner: false;
        },
        {
          name: "curveMintAta";
          isMut: true;
          isSigner: false;
        },
        {
          name: "treasury";
          isMut: true;
          isSigner: false;
        },
        {
          name: "referrer";
          isMut: true;
          isSigner: false;
          isOptional: true;
        },
        {
          name: "systemProgram";
          isMut: false;
          isSigner: false;
        },
        {
          name: "tokenProgram";
          isMut: false;
          isSigner: false;
        },
        {
          name: "associatedTokenProgram";
          isMut: false;
          isSigner: false;
        },
        {
          name: "eventAuthority";
          isMut: false;
          isSigner: false;
        },
        {
          name: "program";
          isMut: false;
          isSigner: false;
        }
      ];
      args: [
        {
          name: "amountIn";
          type: "u64";
        },
        {
          name: "minimumAmountOut";
          type: "u64";
        }
      ];
    },
    {
      name: "swapExactTokensForSol";
      accounts: [
        {
          name: "user";
          isMut: true;
          isSigner: true;
        },
        {
          name: "mainState";
          isMut: true;
          isSigner: false;
        },
        {
          name: "curveState";
          isMut: true;
          isSigner: false;
        },
        {
          name: "mint";
          isMut: false;
          isSigner: false;
        },
        {
          name: "userMintAta";
          isMut: true;
          isSigner: false;
        },
        {
          name: "curveMintAta";
          isMut: true;
          isSigner: false;
        },
        {
          name: "treasury";
          isMut: true;
          isSigner: false;
        },
        {
          name: "referrer";
          isMut: true;
          isSigner: false;
          isOptional: true;
        },
        {
          name: "systemProgram";
          isMut: false;
          isSigner: false;
        },
        {
          name: "tokenProgram";
          isMut: false;
          isSigner: false;
        },
        {
          name: "associatedTokenProgram";
          isMut: false;
          isSigner: false;
        },
        {
          name: "eventAuthority";
          isMut: false;
          isSigner: false;
        },
        {
          name: "program";
          isMut: false;
          isSigner: false;
        }
      ];
      args: [
        {
          name: "amountIn";
          type: "u64";
        },
        {
          name: "minimumAmountOut";
          type: "u64";
        }
      ];
    },
    {
      name: "seederWithdraw";
      accounts: [
        {
          name: "owner";
          isMut: true;
          isSigner: true;
        },
        {
          name: "mainState";
          isMut: true;
          isSigner: false;
        },
        {
          name: "curveState";
          isMut: true;
          isSigner: false;
        },
        {
          name: "mint";
          isMut: false;
          isSigner: false;
        },
        {
          name: "seeder";
          isMut: true;
          isSigner: false;
        },
        {
          name: "curveMintAta";
          isMut: true;
          isSigner: false;
        },
        {
          name: "seederMintAta";
          isMut: true;
          isSigner: false;
        },
        {
          name: "treasury";
          isMut: true;
          isSigner: false;
        },
        {
          name: "systemProgram";
          isMut: false;
          isSigner: false;
        },
        {
          name: "tokenProgram";
          isMut: false;
          isSigner: false;
        },
        {
          name: "associatedTokenProgram";
          isMut: false;
          isSigner: false;
        }
      ];
      args: [];
    }
  ];
  accounts: [
    {
      name: "curveState";
      type: {
        kind: "struct";
        fields: [
          {
            name: "creator";
            type: "publicKey";
          },
          {
            name: "mint";
            type: "publicKey";
          },
          {
            name: "tokenReserve";
            type: "u64";
          },
          {
            name: "solReserve";
            type: "u64";
          },
          {
            name: "maxBuyWallet";
            type: "u64";
          },
          {
            name: "startTime";
            type: "i64";
          },
          {
            name: "isFilled";
            type: "bool";
          },
          {
            name: "isPremium";
            type: "bool";
          }
        ];
      };
    },
    {
      name: "mainState";
      type: {
        kind: "struct";
        fields: [
          {
            name: "owner";
            type: "publicKey";
          },
          {
            name: "treasury";
            type: "publicKey";
          },
          {
            name: "tradingFeeBps";
            type: "u16";
          },
          {
            name: "seedFeeBps";
            type: "u16";
          },
          {
            name: "premiumFee";
            type: "u64";
          }
        ];
      };
    }
  ];
  types: [
    {
      name: "TokenParams";
      type: {
        kind: "struct";
        fields: [
          {
            name: "name";
            type: "string";
          },
          {
            name: "symbol";
            type: "string";
          },
          {
            name: "uri";
            type: "string";
          }
        ];
      };
    },
    {
      name: "CurveParams";
      type: {
        kind: "struct";
        fields: [
          {
            name: "maxBuyWallet";
            type: "u64";
          },
          {
            name: "startTime";
            type: "i64";
          },
          {
            name: "isPremium";
            type: "bool";
          }
        ];
      };
    },
    {
      name: "UpdateMainStateInput";
      type: {
        kind: "struct";
        fields: [
          {
            name: "owner";
            type: {
              option: "publicKey";
            };
          },
          {
            name: "tradingFeeBps";
            type: {
              option: "u16";
            };
          },
          {
            name: "seedFeeBps";
            type: {
              option: "u16";
            };
          },
          {
            name: "premiumFee";
            type: {
              option: "u64";
            };
          }
        ];
      };
    }
  ];
  events: [
    {
      name: "CurveCreated";
      fields: [
        {
          name: "creator";
          type: "publicKey";
          index: false;
        },
        {
          name: "tokenParams";
          type: {
            defined: "TokenParams";
          };
          index: false;
        },
        {
          name: "curveParams";
          type: {
            defined: "CurveParams";
          };
          index: false;
        },
        {
          name: "curve";
          type: "publicKey";
          index: false;
        },
        {
          name: "mint";
          type: "publicKey";
          index: false;
        }
      ];
    },
    {
      name: "SwappedExactSolForTokens";
      fields: [
        {
          name: "user";
          type: "publicKey";
          index: false;
        },
        {
          name: "mint";
          type: "publicKey";
          index: false;
        },
        {
          name: "amountIn";
          type: "u64";
          index: false;
        },
        {
          name: "amountOut";
          type: "u64";
          index: false;
        },
        {
          name: "newSolReserve";
          type: "u64";
          index: false;
        },
        {
          name: "newTokenReserve";
          type: "u64";
          index: false;
        },
        {
          name: "referrer";
          type: {
            option: "publicKey";
          };
          index: false;
        }
      ];
    },
    {
      name: "SwappedExactTokensForSol";
      fields: [
        {
          name: "user";
          type: "publicKey";
          index: false;
        },
        {
          name: "mint";
          type: "publicKey";
          index: false;
        },
        {
          name: "amountIn";
          type: "u64";
          index: false;
        },
        {
          name: "amountOut";
          type: "u64";
          index: false;
        },
        {
          name: "newSolReserve";
          type: "u64";
          index: false;
        },
        {
          name: "newTokenReserve";
          type: "u64";
          index: false;
        },
        {
          name: "referrer";
          type: {
            option: "publicKey";
          };
          index: false;
        }
      ];
    },
    {
      name: "CurveFilled";
      fields: [
        {
          name: "curve";
          type: "publicKey";
          index: false;
        }
      ];
    }
  ];
  errors: [
    {
      code: 6000;
      name: "InvalidTokenName";
      msg: "Invalid token name";
    },
    {
      code: 6001;
      name: "InvalidTokenSymbol";
      msg: "Invalid token symbol";
    },
    {
      code: 6002;
      name: "InvalidTokenUri";
      msg: "Invalid token uri";
    },
    {
      code: 6003;
      name: "InvalidTokenSupply";
      msg: "Invalid token supply";
    },
    {
      code: 6004;
      name: "UnAuthorised";
      msg: "Unauthorised";
    },
    {
      code: 6005;
      name: "InSufficientFund";
      msg: "Insufficient fund";
    },
    {
      code: 6006;
      name: "UnknownToken";
      msg: "One token should be Sol";
    },
    {
      code: 6007;
      name: "TradingNotStarted";
      msg: "Trading not started";
    },
    {
      code: 6008;
      name: "TradingEnded";
      msg: "Trading ended";
    },
    {
      code: 6009;
      name: "TradingNotEnded";
      msg: "Trading not ended";
    },
    {
      code: 6010;
      name: "MaxBuyWalletExceeded";
      msg: "Max buy wallet exceeded";
    },
    {
      code: 6011;
      name: "SlippageError";
      msg: "Slippage not met";
    },
    {
      code: 6012;
      name: "Overflow";
      msg: "Overflow";
    }
  ];
};

export const IDL: LaunchWtf = {
  version: "0.1.0",
  name: "launch_wtf",
  instructions: [
    {
      name: "initMainState",
      accounts: [
        {
          name: "owner",
          isMut: true,
          isSigner: true,
        },
        {
          name: "mainState",
          isMut: true,
          isSigner: false,
        },
        {
          name: "systemProgram",
          isMut: false,
          isSigner: false,
        },
      ],
      args: [
        {
          name: "treasury",
          type: "publicKey",
        },
        {
          name: "tradingFeeBps",
          type: "u16",
        },
        {
          name: "seedFeeBps",
          type: "u16",
        },
        {
          name: "premiumFee",
          type: "u64",
        },
      ],
    },
    {
      name: "updateMainState",
      accounts: [
        {
          name: "owner",
          isMut: true,
          isSigner: true,
        },
        {
          name: "mainState",
          isMut: true,
          isSigner: false,
        },
      ],
      args: [
        {
          name: "input",
          type: {
            defined: "UpdateMainStateInput",
          },
        },
      ],
    },
    {
      name: "createCurve",
      accounts: [
        {
          name: "creator",
          isMut: true,
          isSigner: true,
        },
        {
          name: "metadata",
          isMut: true,
          isSigner: false,
        },
        {
          name: "mint",
          isMut: true,
          isSigner: false,
        },
        {
          name: "curveState",
          isMut: true,
          isSigner: false,
        },
        {
          name: "tokenReserve",
          isMut: true,
          isSigner: false,
        },
        {
          name: "mainState",
          isMut: true,
          isSigner: false,
        },
        {
          name: "treasury",
          isMut: true,
          isSigner: false,
        },
        {
          name: "tokenMetadataProgram",
          isMut: false,
          isSigner: false,
        },
        {
          name: "rent",
          isMut: false,
          isSigner: false,
        },
        {
          name: "systemProgram",
          isMut: false,
          isSigner: false,
        },
        {
          name: "tokenProgram",
          isMut: false,
          isSigner: false,
        },
        {
          name: "associatedTokenProgram",
          isMut: false,
          isSigner: false,
        },
        {
          name: "eventAuthority",
          isMut: false,
          isSigner: false,
        },
        {
          name: "program",
          isMut: false,
          isSigner: false,
        },
      ],
      args: [
        {
          name: "tokenParams",
          type: {
            defined: "TokenParams",
          },
        },
        {
          name: "curveParams",
          type: {
            defined: "CurveParams",
          },
        },
        {
          name: "randomSeed",
          type: "u64",
        },
      ],
    },
    {
      name: "swapExactSolForTokens",
      accounts: [
        {
          name: "user",
          isMut: true,
          isSigner: true,
        },
        {
          name: "mainState",
          isMut: true,
          isSigner: false,
        },
        {
          name: "curveState",
          isMut: true,
          isSigner: false,
        },
        {
          name: "mint",
          isMut: false,
          isSigner: false,
        },
        {
          name: "userMintAta",
          isMut: true,
          isSigner: false,
        },
        {
          name: "curveMintAta",
          isMut: true,
          isSigner: false,
        },
        {
          name: "treasury",
          isMut: true,
          isSigner: false,
        },
        {
          name: "referrer",
          isMut: true,
          isSigner: false,
          isOptional: true,
        },
        {
          name: "systemProgram",
          isMut: false,
          isSigner: false,
        },
        {
          name: "tokenProgram",
          isMut: false,
          isSigner: false,
        },
        {
          name: "associatedTokenProgram",
          isMut: false,
          isSigner: false,
        },
        {
          name: "eventAuthority",
          isMut: false,
          isSigner: false,
        },
        {
          name: "program",
          isMut: false,
          isSigner: false,
        },
      ],
      args: [
        {
          name: "amountIn",
          type: "u64",
        },
        {
          name: "minimumAmountOut",
          type: "u64",
        },
      ],
    },
    {
      name: "swapExactTokensForSol",
      accounts: [
        {
          name: "user",
          isMut: true,
          isSigner: true,
        },
        {
          name: "mainState",
          isMut: true,
          isSigner: false,
        },
        {
          name: "curveState",
          isMut: true,
          isSigner: false,
        },
        {
          name: "mint",
          isMut: false,
          isSigner: false,
        },
        {
          name: "userMintAta",
          isMut: true,
          isSigner: false,
        },
        {
          name: "curveMintAta",
          isMut: true,
          isSigner: false,
        },
        {
          name: "treasury",
          isMut: true,
          isSigner: false,
        },
        {
          name: "referrer",
          isMut: true,
          isSigner: false,
          isOptional: true,
        },
        {
          name: "systemProgram",
          isMut: false,
          isSigner: false,
        },
        {
          name: "tokenProgram",
          isMut: false,
          isSigner: false,
        },
        {
          name: "associatedTokenProgram",
          isMut: false,
          isSigner: false,
        },
        {
          name: "eventAuthority",
          isMut: false,
          isSigner: false,
        },
        {
          name: "program",
          isMut: false,
          isSigner: false,
        },
      ],
      args: [
        {
          name: "amountIn",
          type: "u64",
        },
        {
          name: "minimumAmountOut",
          type: "u64",
        },
      ],
    },
    {
      name: "seederWithdraw",
      accounts: [
        {
          name: "owner",
          isMut: true,
          isSigner: true,
        },
        {
          name: "mainState",
          isMut: true,
          isSigner: false,
        },
        {
          name: "curveState",
          isMut: true,
          isSigner: false,
        },
        {
          name: "mint",
          isMut: false,
          isSigner: false,
        },
        {
          name: "seeder",
          isMut: true,
          isSigner: false,
        },
        {
          name: "curveMintAta",
          isMut: true,
          isSigner: false,
        },
        {
          name: "seederMintAta",
          isMut: true,
          isSigner: false,
        },
        {
          name: "treasury",
          isMut: true,
          isSigner: false,
        },
        {
          name: "systemProgram",
          isMut: false,
          isSigner: false,
        },
        {
          name: "tokenProgram",
          isMut: false,
          isSigner: false,
        },
        {
          name: "associatedTokenProgram",
          isMut: false,
          isSigner: false,
        },
      ],
      args: [],
    },
  ],
  accounts: [
    {
      name: "curveState",
      type: {
        kind: "struct",
        fields: [
          {
            name: "creator",
            type: "publicKey",
          },
          {
            name: "mint",
            type: "publicKey",
          },
          {
            name: "tokenReserve",
            type: "u64",
          },
          {
            name: "solReserve",
            type: "u64",
          },
          {
            name: "maxBuyWallet",
            type: "u64",
          },
          {
            name: "startTime",
            type: "i64",
          },
          {
            name: "isFilled",
            type: "bool",
          },
          {
            name: "isPremium",
            type: "bool",
          },
        ],
      },
    },
    {
      name: "mainState",
      type: {
        kind: "struct",
        fields: [
          {
            name: "owner",
            type: "publicKey",
          },
          {
            name: "treasury",
            type: "publicKey",
          },
          {
            name: "tradingFeeBps",
            type: "u16",
          },
          {
            name: "seedFeeBps",
            type: "u16",
          },
          {
            name: "premiumFee",
            type: "u64",
          },
        ],
      },
    },
  ],
  types: [
    {
      name: "TokenParams",
      type: {
        kind: "struct",
        fields: [
          {
            name: "name",
            type: "string",
          },
          {
            name: "symbol",
            type: "string",
          },
          {
            name: "uri",
            type: "string",
          },
        ],
      },
    },
    {
      name: "CurveParams",
      type: {
        kind: "struct",
        fields: [
          {
            name: "maxBuyWallet",
            type: "u64",
          },
          {
            name: "startTime",
            type: "i64",
          },
          {
            name: "isPremium",
            type: "bool",
          },
        ],
      },
    },
    {
      name: "UpdateMainStateInput",
      type: {
        kind: "struct",
        fields: [
          {
            name: "owner",
            type: {
              option: "publicKey",
            },
          },
          {
            name: "tradingFeeBps",
            type: {
              option: "u16",
            },
          },
          {
            name: "seedFeeBps",
            type: {
              option: "u16",
            },
          },
          {
            name: "premiumFee",
            type: {
              option: "u64",
            },
          },
        ],
      },
    },
  ],
  events: [
    {
      name: "CurveCreated",
      fields: [
        {
          name: "creator",
          type: "publicKey",
          index: false,
        },
        {
          name: "tokenParams",
          type: {
            defined: "TokenParams",
          },
          index: false,
        },
        {
          name: "curveParams",
          type: {
            defined: "CurveParams",
          },
          index: false,
        },
        {
          name: "curve",
          type: "publicKey",
          index: false,
        },
        {
          name: "mint",
          type: "publicKey",
          index: false,
        },
      ],
    },
    {
      name: "SwappedExactSolForTokens",
      fields: [
        {
          name: "user",
          type: "publicKey",
          index: false,
        },
        {
          name: "mint",
          type: "publicKey",
          index: false,
        },
        {
          name: "amountIn",
          type: "u64",
          index: false,
        },
        {
          name: "amountOut",
          type: "u64",
          index: false,
        },
        {
          name: "newSolReserve",
          type: "u64",
          index: false,
        },
        {
          name: "newTokenReserve",
          type: "u64",
          index: false,
        },
        {
          name: "referrer",
          type: {
            option: "publicKey",
          },
          index: false,
        },
      ],
    },
    {
      name: "SwappedExactTokensForSol",
      fields: [
        {
          name: "user",
          type: "publicKey",
          index: false,
        },
        {
          name: "mint",
          type: "publicKey",
          index: false,
        },
        {
          name: "amountIn",
          type: "u64",
          index: false,
        },
        {
          name: "amountOut",
          type: "u64",
          index: false,
        },
        {
          name: "newSolReserve",
          type: "u64",
          index: false,
        },
        {
          name: "newTokenReserve",
          type: "u64",
          index: false,
        },
        {
          name: "referrer",
          type: {
            option: "publicKey",
          },
          index: false,
        },
      ],
    },
    {
      name: "CurveFilled",
      fields: [
        {
          name: "curve",
          type: "publicKey",
          index: false,
        },
      ],
    },
  ],
  errors: [
    {
      code: 6000,
      name: "InvalidTokenName",
      msg: "Invalid token name",
    },
    {
      code: 6001,
      name: "InvalidTokenSymbol",
      msg: "Invalid token symbol",
    },
    {
      code: 6002,
      name: "InvalidTokenUri",
      msg: "Invalid token uri",
    },
    {
      code: 6003,
      name: "InvalidTokenSupply",
      msg: "Invalid token supply",
    },
    {
      code: 6004,
      name: "UnAuthorised",
      msg: "Unauthorised",
    },
    {
      code: 6005,
      name: "InSufficientFund",
      msg: "Insufficient fund",
    },
    {
      code: 6006,
      name: "UnknownToken",
      msg: "One token should be Sol",
    },
    {
      code: 6007,
      name: "TradingNotStarted",
      msg: "Trading not started",
    },
    {
      code: 6008,
      name: "TradingEnded",
      msg: "Trading ended",
    },
    {
      code: 6009,
      name: "TradingNotEnded",
      msg: "Trading not ended",
    },
    {
      code: 6010,
      name: "MaxBuyWalletExceeded",
      msg: "Max buy wallet exceeded",
    },
    {
      code: 6011,
      name: "SlippageError",
      msg: "Slippage not met",
    },
    {
      code: 6012,
      name: "Overflow",
      msg: "Overflow",
    },
  ],
};
