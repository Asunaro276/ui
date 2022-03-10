'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var _tslib = require('../../_virtual/_tslib.js');
var jsxRuntime = require('react/jsx-runtime');
var React = require('react');
var UserContext = require('./UserContext.js');
var Icons = require('./Icons.js');
var Auth_module = require('./Auth.module.css.js');
var Input = require('../Input/Input2.js');
var IconMail = require('../Icon/icons/IconMail/IconMail2.js');
var IconKey = require('../Icon/icons/IconKey/IconKey2.js');
var Checkbox = require('../Checkbox/Checkbox2.js');
var IconLock = require('../Icon/icons/IconLock/IconLock2.js');
var IconInbox = require('../Icon/icons/IconInbox/IconInbox2.js');
var Divider = require('../Divider/Divider2.js');
var Space = require('../Space/Space2.js');
var Typography = require('../Typography/Typography2.js');
var Button = require('../Button/Button2.js');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

const VIEWS = {
  SIGN_IN: 'sign_in',
  SIGN_UP: 'sign_up',
  FORGOTTEN_PASSWORD: 'forgotten_password',
  MAGIC_LINK: 'magic_link',
  UPDATE_PASSWORD: 'update_password'
};

function Auth(_ref) {
  let {
    supabaseClient,
    className,
    style,
    socialLayout = 'vertical',
    socialColors = false,
    socialButtonSize = 'medium',
    providers,
    view = 'sign_in',
    redirectTo,
    onlyThirdPartyProviders = false,
    magicLink = false
  } = _ref;
  const [authView, setAuthView] = React.useState(view);
  const [defaultEmail, setDefaultEmail] = React.useState('');
  const [defaultPassword, setDefaultPassword] = React.useState('');
  const verticalSocialLayout = socialLayout === 'vertical' ? true : false;
  let containerClasses = [Auth_module["default"]['sbui-auth']];

  if (className) {
    containerClasses.push(className);
  }

  const Container = props => jsxRuntime.jsx("div", Object.assign({
    className: containerClasses.join(' '),
    style: style
  }, {
    children: jsxRuntime.jsxs(Space["default"], Object.assign({
      size: 8,
      direction: 'vertical'
    }, {
      children: [jsxRuntime.jsx(SocialAuth, {
        supabaseClient: supabaseClient,
        verticalSocialLayout: verticalSocialLayout,
        providers: providers,
        socialLayout: socialLayout,
        socialButtonSize: socialButtonSize,
        socialColors: socialColors,
        redirectTo: redirectTo,
        onlyThirdPartyProviders: onlyThirdPartyProviders,
        magicLink: magicLink
      }, void 0), !onlyThirdPartyProviders && props.children]
    }), void 0)
  }), void 0);

  React.useEffect(() => {
    // handle view override
    setAuthView(view);
  }, [view]);

  switch (authView) {
    case VIEWS.SIGN_IN:
    case VIEWS.SIGN_UP:
      return jsxRuntime.jsx(Container, {
        children: jsxRuntime.jsx(EmailAuth, {
          id: authView === VIEWS.SIGN_UP ? 'auth-sign-up' : 'auth-sign-in',
          supabaseClient: supabaseClient,
          authView: authView,
          setAuthView: setAuthView,
          defaultEmail: defaultEmail,
          defaultPassword: defaultPassword,
          setDefaultEmail: setDefaultEmail,
          setDefaultPassword: setDefaultPassword,
          redirectTo: redirectTo,
          magicLink: magicLink
        }, void 0)
      }, void 0);

    case VIEWS.FORGOTTEN_PASSWORD:
      return jsxRuntime.jsx(Container, {
        children: jsxRuntime.jsx(ForgottenPassword, {
          supabaseClient: supabaseClient,
          setAuthView: setAuthView,
          redirectTo: redirectTo
        }, void 0)
      }, void 0);

    case VIEWS.MAGIC_LINK:
      return jsxRuntime.jsx(Container, {
        children: jsxRuntime.jsx(MagicLink, {
          supabaseClient: supabaseClient,
          setAuthView: setAuthView,
          redirectTo: redirectTo
        }, void 0)
      }, void 0);

    case VIEWS.UPDATE_PASSWORD:
      return jsxRuntime.jsx(Container, {
        children: jsxRuntime.jsx(UpdatePassword, {
          supabaseClient: supabaseClient
        }, void 0)
      }, void 0);

    default:
      return null;
  }
}

function SocialAuth(_a) {
  var {
    className,
    style,
    supabaseClient,
    children,
    socialLayout = 'vertical',
    socialColors = false,
    socialButtonSize,
    providers,
    verticalSocialLayout,
    redirectTo,
    onlyThirdPartyProviders,
    magicLink
  } = _a;
      _tslib.__rest(_a, ["className", "style", "supabaseClient", "children", "socialLayout", "socialColors", "socialButtonSize", "providers", "verticalSocialLayout", "redirectTo", "onlyThirdPartyProviders", "magicLink"]);

  const buttonStyles = {
    azure: {
      backgroundColor: '#008AD7',
      color: 'white'
    },
    bitbucket: {
      backgroundColor: '#205081',
      color: 'white'
    },
    facebook: {
      backgroundColor: '#4267B2',
      color: 'white'
    },
    github: {
      backgroundColor: '#333',
      color: 'white'
    },
    gitlab: {
      backgroundColor: '#FC6D27'
    },
    google: {
      backgroundColor: '#ce4430',
      color: 'white'
    },
    twitter: {
      backgroundColor: '#1DA1F2',
      color: 'white'
    },
    apple: {
      backgroundColor: '#000',
      color: 'white'
    },
    discord: {
      backgroundColor: '#404fec',
      color: 'white'
    },
    twitch: {
      backgroundColor: '#9146ff',
      color: 'white'
    }
  };
  const [loading, setLoading] = React.useState(false);
  const [error, setError] = React.useState('');

  const handleProviderSignIn = provider => _tslib.__awaiter(this, void 0, void 0, function* () {
    setLoading(true);
    const {
      error
    } = yield supabaseClient.auth.signIn({
      provider
    }, {
      redirectTo
    });
    if (error) setError(error.message);
    setLoading(false);
  });

  return jsxRuntime.jsx(Space["default"], Object.assign({
    size: 8,
    direction: 'vertical'
  }, {
    children: providers && providers.length > 0 && jsxRuntime.jsxs(React__default["default"].Fragment, {
      children: [jsxRuntime.jsxs(Space["default"], Object.assign({
        size: 4,
        direction: 'vertical'
      }, {
        children: [jsxRuntime.jsx(Typography["default"].Text, Object.assign({
          type: "secondary",
          className: Auth_module["default"]['sbui-auth-label']
        }, {
          children: "Sign in with"
        }), void 0), jsxRuntime.jsx(Space["default"], Object.assign({
          size: 2,
          direction: socialLayout
        }, {
          children: providers.map(provider => {
            // @ts-ignore
            const AuthIcon = Icons[provider];
            return jsxRuntime.jsx("div", Object.assign({
              style: !verticalSocialLayout ? {
                flexGrow: 1
              } : {}
            }, {
              children: jsxRuntime.jsx(Button["default"], Object.assign({
                block: true,
                type: "default",
                shadow: true,
                size: socialButtonSize,
                style: socialColors ? buttonStyles[provider] : {},
                icon: jsxRuntime.jsx(AuthIcon, {}, void 0),
                loading: loading,
                onClick: () => handleProviderSignIn(provider),
                className: "flex items-center"
              }, {
                children: verticalSocialLayout && 'Sign up with ' + provider
              }), void 0)
            }), provider);
          })
        }), void 0)]
      }), void 0), !onlyThirdPartyProviders && jsxRuntime.jsx(Divider["default"], {
        children: "or continue with"
      }, void 0)]
    }, void 0)
  }), void 0);
}

function EmailAuth(_ref2) {
  let {
    authView,
    defaultEmail,
    defaultPassword,
    id,
    setAuthView,
    setDefaultEmail,
    setDefaultPassword,
    supabaseClient,
    redirectTo,
    magicLink
  } = _ref2;
  const isMounted = React.useRef(true);
  const [email, setEmail] = React.useState(defaultEmail);
  const [password, setPassword] = React.useState(defaultPassword);
  const [rememberMe, setRememberMe] = React.useState(false);
  const [error, setError] = React.useState('');
  const [loading, setLoading] = React.useState(false);
  const [message, setMessage] = React.useState('');
  React.useEffect(() => {
    setEmail(defaultEmail);
    setPassword(defaultPassword);
    return () => {
      isMounted.current = false;
    };
  }, [authView]);

  const handleSubmit = e => _tslib.__awaiter(this, void 0, void 0, function* () {
    e.preventDefault();
    setError('');
    setLoading(true);

    switch (authView) {
      case 'sign_in':
        const {
          error: signInError
        } = yield supabaseClient.auth.signIn({
          email,
          password
        }, {
          redirectTo
        });
        if (signInError) setError(signInError.message);
        break;

      case 'sign_up':
        const {
          user: signUpUser,
          session: signUpSession,
          error: signUpError
        } = yield supabaseClient.auth.signUp({
          email,
          password
        }, {
          redirectTo
        });
        if (signUpError) setError(signUpError.message); // Check if session is null -> email confirmation setting is turned on
        else if (signUpUser && !signUpSession) setMessage('Check your email for the confirmation link.');
        break;
    }
    /*
     * it is possible the auth component may have been unmounted at this point
     * check if component is mounted before setting a useState
     */


    if (isMounted.current) setLoading(false);
  });

  const handleViewChange = newView => {
    setDefaultEmail(email);
    setDefaultPassword(password);
    setAuthView(newView);
  };

  return jsxRuntime.jsx("form", Object.assign({
    id: id,
    onSubmit: handleSubmit
  }, {
    children: jsxRuntime.jsxs(Space["default"], Object.assign({
      size: 6,
      direction: 'vertical'
    }, {
      children: [jsxRuntime.jsxs(Space["default"], Object.assign({
        size: 3,
        direction: 'vertical'
      }, {
        children: [jsxRuntime.jsx(Input["default"], {
          label: "Email address",
          autoComplete: "email",
          defaultValue: email,
          icon: jsxRuntime.jsx(IconMail["default"], {
            size: 21,
            stroke: '#666666'
          }, void 0),
          onChange: e => setEmail(e.target.value)
        }, void 0), jsxRuntime.jsx(Input["default"], {
          label: "Password",
          type: "password",
          defaultValue: password,
          autoComplete: "current-password",
          icon: jsxRuntime.jsx(IconKey["default"], {
            size: 21,
            stroke: '#666666'
          }, void 0),
          onChange: e => setPassword(e.target.value)
        }, void 0)]
      }), void 0), jsxRuntime.jsxs(Space["default"], Object.assign({
        direction: "vertical",
        size: 6
      }, {
        children: [jsxRuntime.jsxs(Space["default"], Object.assign({
          style: {
            justifyContent: 'space-between'
          }
        }, {
          children: [jsxRuntime.jsx(Checkbox.Checkbox, {
            label: "Remember me",
            name: "remember_me",
            id: "remember_me",
            onChange: value => setRememberMe(value.target.checked)
          }, void 0), authView === VIEWS.SIGN_IN && jsxRuntime.jsx(Typography["default"].Link, Object.assign({
            href: "#auth-forgot-password",
            onClick: e => {
              e.preventDefault();
              setAuthView(VIEWS.FORGOTTEN_PASSWORD);
            }
          }, {
            children: "Forgot your password?"
          }), void 0)]
        }), void 0), jsxRuntime.jsx(Button["default"], Object.assign({
          htmlType: "submit",
          type: "primary",
          size: "large",
          icon: jsxRuntime.jsx(IconLock["default"], {
            size: 21
          }, void 0),
          loading: loading,
          block: true
        }, {
          children: authView === VIEWS.SIGN_IN ? 'Sign in' : 'Sign up'
        }), void 0)]
      }), void 0), jsxRuntime.jsxs(Space["default"], Object.assign({
        direction: "vertical",
        style: {
          textAlign: 'center'
        }
      }, {
        children: [authView === VIEWS.SIGN_IN && magicLink && jsxRuntime.jsx(Typography["default"].Link, Object.assign({
          href: "#auth-magic-link",
          onClick: e => {
            e.preventDefault();
            setAuthView(VIEWS.MAGIC_LINK);
          }
        }, {
          children: "Sign in with magic link"
        }), void 0), authView === VIEWS.SIGN_IN ? jsxRuntime.jsx(Typography["default"].Link, Object.assign({
          href: "#auth-sign-up",
          onClick: e => {
            e.preventDefault();
            handleViewChange(VIEWS.SIGN_UP);
          }
        }, {
          children: "Don't have an account? Sign up"
        }), void 0) : jsxRuntime.jsx(Typography["default"].Link, Object.assign({
          href: "#auth-sign-in",
          onClick: e => {
            e.preventDefault();
            handleViewChange(VIEWS.SIGN_IN);
          }
        }, {
          children: "Do you have an account? Sign in"
        }), void 0), message && jsxRuntime.jsx(Typography["default"].Text, {
          children: message
        }, void 0), error && jsxRuntime.jsx(Typography["default"].Text, Object.assign({
          type: "danger"
        }, {
          children: error
        }), void 0)]
      }), void 0)]
    }), void 0)
  }), void 0);
}

function MagicLink(_ref3) {
  let {
    setAuthView,
    supabaseClient,
    redirectTo
  } = _ref3;
  const [email, setEmail] = React.useState('');
  const [error, setError] = React.useState('');
  const [message, setMessage] = React.useState('');
  const [loading, setLoading] = React.useState(false);

  const handleMagicLinkSignIn = e => _tslib.__awaiter(this, void 0, void 0, function* () {
    e.preventDefault();
    setError('');
    setMessage('');
    setLoading(true);
    const {
      error
    } = yield supabaseClient.auth.signIn({
      email
    }, {
      redirectTo
    });
    if (error) setError(error.message);else setMessage('Check your email for the magic link');
    setLoading(false);
  });

  return jsxRuntime.jsx("form", Object.assign({
    id: "auth-magic-link",
    onSubmit: handleMagicLinkSignIn
  }, {
    children: jsxRuntime.jsxs(Space["default"], Object.assign({
      size: 4,
      direction: 'vertical'
    }, {
      children: [jsxRuntime.jsxs(Space["default"], Object.assign({
        size: 3,
        direction: 'vertical'
      }, {
        children: [jsxRuntime.jsx(Input["default"], {
          label: "Email address",
          placeholder: "Your email address",
          icon: jsxRuntime.jsx(IconMail["default"], {
            size: 21,
            stroke: '#666666'
          }, void 0),
          onChange: e => setEmail(e.target.value)
        }, void 0), jsxRuntime.jsx(Button["default"], Object.assign({
          block: true,
          size: "large",
          htmlType: "submit",
          icon: jsxRuntime.jsx(IconInbox["default"], {
            size: 21
          }, void 0),
          loading: loading
        }, {
          children: "Send magic link"
        }), void 0)]
      }), void 0), jsxRuntime.jsx(Typography["default"].Link, Object.assign({
        href: "#auth-sign-in",
        onClick: e => {
          e.preventDefault();
          setAuthView(VIEWS.SIGN_IN);
        }
      }, {
        children: "Sign in with password"
      }), void 0), message && jsxRuntime.jsx(Typography["default"].Text, {
        children: message
      }, void 0), error && jsxRuntime.jsx(Typography["default"].Text, Object.assign({
        type: "danger"
      }, {
        children: error
      }), void 0)]
    }), void 0)
  }), void 0);
}

function ForgottenPassword(_ref4) {
  let {
    setAuthView,
    supabaseClient,
    redirectTo
  } = _ref4;
  const [email, setEmail] = React.useState('');
  const [error, setError] = React.useState('');
  const [message, setMessage] = React.useState('');
  const [loading, setLoading] = React.useState(false);

  const handlePasswordReset = e => _tslib.__awaiter(this, void 0, void 0, function* () {
    e.preventDefault();
    setError('');
    setMessage('');
    setLoading(true);
    const {
      error
    } = yield supabaseClient.auth.api.resetPasswordForEmail(email, {
      redirectTo
    });
    if (error) setError(error.message);else setMessage('Check your email for the password reset link');
    setLoading(false);
  });

  return jsxRuntime.jsx("form", Object.assign({
    id: "auth-forgot-password",
    onSubmit: handlePasswordReset
  }, {
    children: jsxRuntime.jsxs(Space["default"], Object.assign({
      size: 4,
      direction: 'vertical'
    }, {
      children: [jsxRuntime.jsxs(Space["default"], Object.assign({
        size: 3,
        direction: 'vertical'
      }, {
        children: [jsxRuntime.jsx(Input["default"], {
          label: "Email address",
          placeholder: "Your email address",
          icon: jsxRuntime.jsx(IconMail["default"], {
            size: 21,
            stroke: '#666666'
          }, void 0),
          onChange: e => setEmail(e.target.value)
        }, void 0), jsxRuntime.jsx(Button["default"], Object.assign({
          block: true,
          size: "large",
          htmlType: "submit",
          icon: jsxRuntime.jsx(IconInbox["default"], {
            size: 21
          }, void 0),
          loading: loading
        }, {
          children: "Send reset password instructions"
        }), void 0)]
      }), void 0), jsxRuntime.jsx(Typography["default"].Link, Object.assign({
        href: "#auth-sign-in",
        onClick: e => {
          e.preventDefault();
          setAuthView(VIEWS.SIGN_IN);
        }
      }, {
        children: "Go back to sign in"
      }), void 0), message && jsxRuntime.jsx(Typography["default"].Text, {
        children: message
      }, void 0), error && jsxRuntime.jsx(Typography["default"].Text, Object.assign({
        type: "danger"
      }, {
        children: error
      }), void 0)]
    }), void 0)
  }), void 0);
}

function UpdatePassword(_ref5) {
  let {
    supabaseClient
  } = _ref5;
  const [password, setPassword] = React.useState('');
  const [error, setError] = React.useState('');
  const [message, setMessage] = React.useState('');
  const [loading, setLoading] = React.useState(false);

  const handlePasswordReset = e => _tslib.__awaiter(this, void 0, void 0, function* () {
    e.preventDefault();
    setError('');
    setMessage('');
    setLoading(true);
    const {
      error
    } = yield supabaseClient.auth.update({
      password
    });
    if (error) setError(error.message);else setMessage('Your password has been updated');
    setLoading(false);
  });

  return jsxRuntime.jsx("form", Object.assign({
    id: "auth-update-password",
    onSubmit: handlePasswordReset
  }, {
    children: jsxRuntime.jsxs(Space["default"], Object.assign({
      size: 4,
      direction: 'vertical'
    }, {
      children: [jsxRuntime.jsxs(Space["default"], Object.assign({
        size: 3,
        direction: 'vertical'
      }, {
        children: [jsxRuntime.jsx(Input["default"], {
          label: "New password",
          placeholder: "Enter your new password",
          type: "password",
          icon: jsxRuntime.jsx(IconKey["default"], {
            size: 21,
            stroke: '#666666'
          }, void 0),
          onChange: e => setPassword(e.target.value)
        }, void 0), jsxRuntime.jsx(Button["default"], Object.assign({
          block: true,
          size: "large",
          htmlType: "submit",
          icon: jsxRuntime.jsx(IconKey["default"], {
            size: 21
          }, void 0),
          loading: loading
        }, {
          children: "Update password"
        }), void 0)]
      }), void 0), message && jsxRuntime.jsx(Typography["default"].Text, {
        children: message
      }, void 0), error && jsxRuntime.jsx(Typography["default"].Text, Object.assign({
        type: "danger"
      }, {
        children: error
      }), void 0)]
    }), void 0)
  }), void 0);
}

Auth.ForgottenPassword = ForgottenPassword;
Auth.UpdatePassword = UpdatePassword;
Auth.MagicLink = MagicLink;
Auth.UserContextProvider = UserContext.UserContextProvider;
Auth.useUser = UserContext.useUser;

exports["default"] = Auth;
