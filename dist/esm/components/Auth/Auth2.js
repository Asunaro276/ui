import { __rest, __awaiter } from '../../_virtual/_tslib.js';
import { jsx, jsxs } from 'react/jsx-runtime';
import React__default, { useState, useEffect, useRef } from 'react';
import { UserContextProvider, useUser } from './UserContext.js';
import * as Icons from './Icons.js';
import AuthStyles from './Auth.module.css.js';
import Input from '../Input/Input2.js';
import IconMail from '../Icon/icons/IconMail/IconMail2.js';
import IconKey from '../Icon/icons/IconKey/IconKey2.js';
import { Checkbox } from '../Checkbox/Checkbox2.js';
import IconLock from '../Icon/icons/IconLock/IconLock2.js';
import IconInbox from '../Icon/icons/IconInbox/IconInbox2.js';
import Divider from '../Divider/Divider2.js';
import Space from '../Space/Space2.js';
import Typography from '../Typography/Typography2.js';
import Button from '../Button/Button2.js';

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
  const [authView, setAuthView] = useState(view);
  const [defaultEmail, setDefaultEmail] = useState('');
  const [defaultPassword, setDefaultPassword] = useState('');
  const verticalSocialLayout = socialLayout === 'vertical' ? true : false;
  let containerClasses = [AuthStyles['sbui-auth']];

  if (className) {
    containerClasses.push(className);
  }

  const Container = props => jsx("div", Object.assign({
    className: containerClasses.join(' '),
    style: style
  }, {
    children: jsxs(Space, Object.assign({
      size: 8,
      direction: 'vertical'
    }, {
      children: [jsx(SocialAuth, {
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

  useEffect(() => {
    // handle view override
    setAuthView(view);
  }, [view]);

  switch (authView) {
    case VIEWS.SIGN_IN:
    case VIEWS.SIGN_UP:
      return jsx(Container, {
        children: jsx(EmailAuth, {
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
      return jsx(Container, {
        children: jsx(ForgottenPassword, {
          supabaseClient: supabaseClient,
          setAuthView: setAuthView,
          redirectTo: redirectTo
        }, void 0)
      }, void 0);

    case VIEWS.MAGIC_LINK:
      return jsx(Container, {
        children: jsx(MagicLink, {
          supabaseClient: supabaseClient,
          setAuthView: setAuthView,
          redirectTo: redirectTo
        }, void 0)
      }, void 0);

    case VIEWS.UPDATE_PASSWORD:
      return jsx(Container, {
        children: jsx(UpdatePassword, {
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
      __rest(_a, ["className", "style", "supabaseClient", "children", "socialLayout", "socialColors", "socialButtonSize", "providers", "verticalSocialLayout", "redirectTo", "onlyThirdPartyProviders", "magicLink"]);

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
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleProviderSignIn = provider => __awaiter(this, void 0, void 0, function* () {
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

  return jsx(Space, Object.assign({
    size: 8,
    direction: 'vertical'
  }, {
    children: providers && providers.length > 0 && jsxs(React__default.Fragment, {
      children: [jsxs(Space, Object.assign({
        size: 4,
        direction: 'vertical'
      }, {
        children: [jsx(Typography.Text, Object.assign({
          type: "secondary",
          className: AuthStyles['sbui-auth-label']
        }, {
          children: "Sign in with"
        }), void 0), jsx(Space, Object.assign({
          size: 2,
          direction: socialLayout
        }, {
          children: providers.map(provider => {
            // @ts-ignore
            const AuthIcon = Icons[provider];
            return jsx("div", Object.assign({
              style: !verticalSocialLayout ? {
                flexGrow: 1
              } : {}
            }, {
              children: jsx(Button, Object.assign({
                block: true,
                type: "default",
                shadow: true,
                size: socialButtonSize,
                style: socialColors ? buttonStyles[provider] : {},
                icon: jsx(AuthIcon, {}, void 0),
                loading: loading,
                onClick: () => handleProviderSignIn(provider),
                className: "flex items-center"
              }, {
                children: verticalSocialLayout && 'Sign up with ' + provider
              }), void 0)
            }), provider);
          })
        }), void 0)]
      }), void 0), !onlyThirdPartyProviders && jsx(Divider, {
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
  const isMounted = useRef(true);
  const [email, setEmail] = useState(defaultEmail);
  const [password, setPassword] = useState(defaultPassword);
  const [rememberMe, setRememberMe] = useState(false);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState('');
  useEffect(() => {
    setEmail(defaultEmail);
    setPassword(defaultPassword);
    return () => {
      isMounted.current = false;
    };
  }, [authView]);

  const handleSubmit = e => __awaiter(this, void 0, void 0, function* () {
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

  return jsx("form", Object.assign({
    id: id,
    onSubmit: handleSubmit
  }, {
    children: jsxs(Space, Object.assign({
      size: 6,
      direction: 'vertical'
    }, {
      children: [jsxs(Space, Object.assign({
        size: 3,
        direction: 'vertical'
      }, {
        children: [jsx(Input, {
          label: "Email address",
          autoComplete: "email",
          defaultValue: email,
          icon: jsx(IconMail, {
            size: 21,
            stroke: '#666666'
          }, void 0),
          onChange: e => setEmail(e.target.value)
        }, void 0), jsx(Input, {
          label: "Password",
          type: "password",
          defaultValue: password,
          autoComplete: "current-password",
          icon: jsx(IconKey, {
            size: 21,
            stroke: '#666666'
          }, void 0),
          onChange: e => setPassword(e.target.value)
        }, void 0)]
      }), void 0), jsxs(Space, Object.assign({
        direction: "vertical",
        size: 6
      }, {
        children: [jsxs(Space, Object.assign({
          style: {
            justifyContent: 'space-between'
          }
        }, {
          children: [jsx(Checkbox, {
            label: "Remember me",
            name: "remember_me",
            id: "remember_me",
            onChange: value => setRememberMe(value.target.checked)
          }, void 0), authView === VIEWS.SIGN_IN && jsx(Typography.Link, Object.assign({
            href: "#auth-forgot-password",
            onClick: e => {
              e.preventDefault();
              setAuthView(VIEWS.FORGOTTEN_PASSWORD);
            }
          }, {
            children: "Forgot your password?"
          }), void 0)]
        }), void 0), jsx(Button, Object.assign({
          htmlType: "submit",
          type: "primary",
          size: "large",
          icon: jsx(IconLock, {
            size: 21
          }, void 0),
          loading: loading,
          block: true
        }, {
          children: authView === VIEWS.SIGN_IN ? 'Sign in' : 'Sign up'
        }), void 0)]
      }), void 0), jsxs(Space, Object.assign({
        direction: "vertical",
        style: {
          textAlign: 'center'
        }
      }, {
        children: [authView === VIEWS.SIGN_IN && magicLink && jsx(Typography.Link, Object.assign({
          href: "#auth-magic-link",
          onClick: e => {
            e.preventDefault();
            setAuthView(VIEWS.MAGIC_LINK);
          }
        }, {
          children: "Sign in with magic link"
        }), void 0), authView === VIEWS.SIGN_IN ? jsx(Typography.Link, Object.assign({
          href: "#auth-sign-up",
          onClick: e => {
            e.preventDefault();
            handleViewChange(VIEWS.SIGN_UP);
          }
        }, {
          children: "Don't have an account? Sign up"
        }), void 0) : jsx(Typography.Link, Object.assign({
          href: "#auth-sign-in",
          onClick: e => {
            e.preventDefault();
            handleViewChange(VIEWS.SIGN_IN);
          }
        }, {
          children: "Do you have an account? Sign in"
        }), void 0), message && jsx(Typography.Text, {
          children: message
        }, void 0), error && jsx(Typography.Text, Object.assign({
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
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');
  const [message, setMessage] = useState('');
  const [loading, setLoading] = useState(false);

  const handleMagicLinkSignIn = e => __awaiter(this, void 0, void 0, function* () {
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

  return jsx("form", Object.assign({
    id: "auth-magic-link",
    onSubmit: handleMagicLinkSignIn
  }, {
    children: jsxs(Space, Object.assign({
      size: 4,
      direction: 'vertical'
    }, {
      children: [jsxs(Space, Object.assign({
        size: 3,
        direction: 'vertical'
      }, {
        children: [jsx(Input, {
          label: "Email address",
          placeholder: "Your email address",
          icon: jsx(IconMail, {
            size: 21,
            stroke: '#666666'
          }, void 0),
          onChange: e => setEmail(e.target.value)
        }, void 0), jsx(Button, Object.assign({
          block: true,
          size: "large",
          htmlType: "submit",
          icon: jsx(IconInbox, {
            size: 21
          }, void 0),
          loading: loading
        }, {
          children: "Send magic link"
        }), void 0)]
      }), void 0), jsx(Typography.Link, Object.assign({
        href: "#auth-sign-in",
        onClick: e => {
          e.preventDefault();
          setAuthView(VIEWS.SIGN_IN);
        }
      }, {
        children: "Sign in with password"
      }), void 0), message && jsx(Typography.Text, {
        children: message
      }, void 0), error && jsx(Typography.Text, Object.assign({
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
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');
  const [message, setMessage] = useState('');
  const [loading, setLoading] = useState(false);

  const handlePasswordReset = e => __awaiter(this, void 0, void 0, function* () {
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

  return jsx("form", Object.assign({
    id: "auth-forgot-password",
    onSubmit: handlePasswordReset
  }, {
    children: jsxs(Space, Object.assign({
      size: 4,
      direction: 'vertical'
    }, {
      children: [jsxs(Space, Object.assign({
        size: 3,
        direction: 'vertical'
      }, {
        children: [jsx(Input, {
          label: "Email address",
          placeholder: "Your email address",
          icon: jsx(IconMail, {
            size: 21,
            stroke: '#666666'
          }, void 0),
          onChange: e => setEmail(e.target.value)
        }, void 0), jsx(Button, Object.assign({
          block: true,
          size: "large",
          htmlType: "submit",
          icon: jsx(IconInbox, {
            size: 21
          }, void 0),
          loading: loading
        }, {
          children: "Send reset password instructions"
        }), void 0)]
      }), void 0), jsx(Typography.Link, Object.assign({
        href: "#auth-sign-in",
        onClick: e => {
          e.preventDefault();
          setAuthView(VIEWS.SIGN_IN);
        }
      }, {
        children: "Go back to sign in"
      }), void 0), message && jsx(Typography.Text, {
        children: message
      }, void 0), error && jsx(Typography.Text, Object.assign({
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
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [message, setMessage] = useState('');
  const [loading, setLoading] = useState(false);

  const handlePasswordReset = e => __awaiter(this, void 0, void 0, function* () {
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

  return jsx("form", Object.assign({
    id: "auth-update-password",
    onSubmit: handlePasswordReset
  }, {
    children: jsxs(Space, Object.assign({
      size: 4,
      direction: 'vertical'
    }, {
      children: [jsxs(Space, Object.assign({
        size: 3,
        direction: 'vertical'
      }, {
        children: [jsx(Input, {
          label: "New password",
          placeholder: "Enter your new password",
          type: "password",
          icon: jsx(IconKey, {
            size: 21,
            stroke: '#666666'
          }, void 0),
          onChange: e => setPassword(e.target.value)
        }, void 0), jsx(Button, Object.assign({
          block: true,
          size: "large",
          htmlType: "submit",
          icon: jsx(IconKey, {
            size: 21
          }, void 0),
          loading: loading
        }, {
          children: "Update password"
        }), void 0)]
      }), void 0), message && jsx(Typography.Text, {
        children: message
      }, void 0), error && jsx(Typography.Text, Object.assign({
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
Auth.UserContextProvider = UserContextProvider;
Auth.useUser = useUser;

export { Auth as default };
