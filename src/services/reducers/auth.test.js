import { authReducer } from './auth';
import { userState } from './auth';
import * as types from '../constants/auth';

describe('auth reducer', () => {
  it('should return the initial state', () => {
    expect(authReducer(undefined, {})).toEqual(userState);
  });

  describe('registration', () => {
    it('should handle REGISTRATION_REQUEST', () => {
      expect(
        authReducer(userState, {
          type: types.REGISTRATION_REQUEST,
        })
      ).toEqual({
        ...userState,
        isRegistrationInProcess: true,
      });
    });

    it('should handle REGISTRATION_SUCCESS', () => {
      expect(
        authReducer(
          { ...userState, isRegistrationInProcess: true },
          {
            type: types.REGISTRATION_SUCCESS,
            payload: {
              user: {
                email: 'test@test.test',
                name: 'Test',
              },
              accessToken: 'Bearer test-acess-token',
              refreshToken: 'refresh-test-token',
            },
          }
        )
      ).toEqual({
        ...userState,
        isAuth: true,
        email: 'test@test.test',
        name: 'Test',
        accessToken: 'test-acess-token',
        refreshToken: 'refresh-test-token',
        isRegistrationInProcess: false,
        isRegistrationSucess: true,
      });
    });

    it('should handle REGISTRATION_ERROR', () => {
      expect(
        authReducer(
          {
            ...userState,
            isAuth: true,
            email: 'test@test.test',
            name: 'Test',
            accessToken: 'test-acess-token',
            refreshToken: 'refresh-test-token',
            isRegistrationInProcess: false,
          },
          {
            type: types.REGISTRATION_ERROR,
          }
        )
      ).toEqual({
        ...userState,
        isAuth: false,
        isRegistrationInProcess: false,
        isRegistrationSucess: false,
        isRegistrationFailed: true,
        email: '',
        name: '',
        accessToken: '',
        refreshToken: '',
      });
    });
  });

  describe('authorization', () => {
    it('should handle AUTHORIZATION_REQUEST', () => {
      expect(
        authReducer(userState, {
          type: types.AUTHORIZATION_REQUEST,
        })
      ).toEqual({
        ...userState,
        isAuthorizationInProcess: true,
      });
    });

    it('should handle AUTHORIZATION_SUCCESS', () => {
      expect(
        authReducer(
          { ...userState, isAuthorizationInProcess: true },
          {
            type: types.AUTHORIZATION_SUCCESS,
            payload: {
              user: {
                email: 'test@test.test',
                name: 'Test',
              },
              accessToken: 'Bearer test-acess-token',
              refreshToken: 'refresh-test-token',
            },
          }
        )
      ).toEqual({
        ...userState,
        isAuth: true,
        email: 'test@test.test',
        name: 'Test',
        accessToken: 'test-acess-token',
        refreshToken: 'refresh-test-token',
        isAuthorizationInProcess: false,
        isAuthorizationSucess: true,
      });
    });

    it('should handle AUTHORIZATION_ERROR', () => {
      expect(
        authReducer(
          {
            ...userState,
            isAuth: true,
            email: 'test@test.test',
            name: 'Test',
            accessToken: 'test-acess-token',
            refreshToken: 'refresh-test-token',
            isAuthorizationInProcess: false,
          },
          {
            type: types.AUTHORIZATION_ERROR,
          }
        )
      ).toEqual({
        ...userState,
        isAuth: false,
        isAuthorizationInProcess: false,
        isAuthorizationSucess: false,
        isAuthorizationFailed: true,
        email: '',
        name: '',
        accessToken: '',
        refreshToken: '',
      });
    });
  });

  describe('password-recovery', () => {
    it('should handle PASSWORD_RECOVERY_REQUEST', () => {
      expect(
        authReducer(userState, {
          type: types.PASSWORD_RECOVERY_REQUEST,
        })
      ).toEqual({
        ...userState,
        isPasswordRecoveryInProcess: true,
      });
    });

    it('should handle PASSWORD_RECOVERY_SUCCESS', () => {
      expect(
        authReducer(
          {
            ...userState,
            isPasswordRecoverySucess: false,
            isPasswordRecoveryInProcess: true,
            isPasswordRecoveryFailed: false,
          },
          {
            type: types.PASSWORD_RECOVERY_SUCCESS,
          }
        )
      ).toEqual({
        ...userState,
        isPasswordRecoverySucess: true,
        isPasswordRecoveryInProcess: false,
        isPasswordRecoveryFailed: false,
      });
    });

    it('should handle PASSWORD_RECOVERY_ERROR', () => {
      expect(
        authReducer(
          {
            ...userState,
            isPasswordRecoverySucess: true,
            isPasswordRecoveryInProcess: false,
            isPasswordRecoveryFailed: false,
          },
          {
            type: types.PASSWORD_RECOVERY_ERROR,
          }
        )
      ).toEqual({
        ...userState,
        isPasswordRecoverySucess: false,
        isPasswordRecoveryInProcess: false,
        isPasswordRecoveryFailed: true,
      });
    });
  });

  describe('password-update', () => {
    it('should handle PASSWORD_UPDATING_REQUEST', () => {
      expect(
        authReducer(userState, {
          type: types.PASSWORD_UPDATING_REQUEST,
        })
      ).toEqual({
        ...userState,
        isPasswordUpdatingInProcess: true,
      });
    });

    it('should handle PASSWORD_UPDATING_SUCCESS', () => {
      expect(
        authReducer(
          {
            ...userState,
            isPasswordUpdatingSucess: false,
            isPasswordUpdatingInProcess: true,
            isPasswordUpdatingFailed: true,
          },
          {
            type: types.PASSWORD_UPDATING_SUCCESS,
          }
        )
      ).toEqual({
        ...userState,
        isPasswordUpdatingSucess: true,
        isPasswordUpdatingInProcess: false,
        isPasswordUpdatingFailed: false,
      });
    });

    it('should handle PASSWORD_UPDATING_ERROR', () => {
      expect(
        authReducer(
          {
            ...userState,
            isPasswordUpdatingSucess: true,
            isPasswordUpdatingInProcess: false,
            isPasswordUpdatingFailed: false,
          },
          {
            type: types.PASSWORD_UPDATING_ERROR,
          }
        )
      ).toEqual({
        ...userState,
        isPasswordUpdatingSucess: false,
        isPasswordUpdatingInProcess: false,
        isPasswordUpdatingFailed: true,
      });
    });
  });

  describe('logout', () => {
    it('should handle LOGOUT_REQUEST', () => {
      expect(
        authReducer(userState, {
          type: types.LOGOUT_REQUEST,
        })
      ).toEqual({
        ...userState,
        isLogoutInProcess: true,
      });
    });

    it('should handle LOGOUT_SUCCESS', () => {
      expect(
        authReducer(
          {
            ...userState,
            isLogoutInProcess: true,
          },
          {
            type: types.LOGOUT_SUCCESS,
          }
        )
      ).toEqual({
        ...userState,
        isAuth: false,
        isLogoutInProcess: false,
        isLogoutFailed: false,
        isLogoutSucess: true,
      });
    });

    it('should handle LOGOUT_ERROR', () => {
      expect(
        authReducer(
          {
            ...userState,
            isAuth: true,
            isLogoutInProcess: true,
            isLogoutFailed: false,
            isLogoutSucess: true,
          },
          {
            type: types.LOGOUT_ERROR,
          }
        )
      ).toEqual({
        ...userState,
        isAuth: true,
        isLogoutInProcess: false,
        isLogoutFailed: true,
        isLogoutSucess: false,
      });
    });
  });

  describe('get-user-info', () => {
    it('should handle GET_USER_INFO_REQUEST', () => {
      expect(
        authReducer(userState, {
          type: types.GET_USER_INFO_REQUEST,
        })
      ).toEqual({
        ...userState,
        getUserInfoInProcess: true,
      });
    });

    it('should handle GET_USER_INFO_SUCCESS', () => {
      expect(
        authReducer(
          {
            ...userState,
            getUserInfoInProcess: true,
          },
          {
            type: types.GET_USER_INFO_SUCCESS,
            payload: {
              user: {
                email: 'test.test@test',
                name: 'Test',
              },
            },
          }
        )
      ).toEqual({
        ...userState,
        isAuth: true,
        getUserInfoInProcess: false,
        getUserInfoFailed: false,
        getUserInfoSucess: true,
        email: 'test.test@test',
        name: 'Test',
      });
    });

    it('should handle GET_USER_INFO_ERROR', () => {
      expect(
        authReducer(
          {
            ...userState,
            isAuth: true,
            getUserInfoInProcess: false,
            getUserInfoFailed: false,
            getUserInfoSucess: true,
            email: 'test.test@test',
            name: 'Test',
          },
          {
            type: types.GET_USER_INFO_ERROR,
          }
        )
      ).toEqual({
        ...userState,
        email: 'test.test@test',
        name: 'Test',
        isAuth: false,
        getUserInfoInProcess: false,
        getUserInfoFailed: true,
        getUserInfoSucess: false,
        accessTokenExpired: true,
      });
    });
  });

  describe('update-user-info', () => {
    it('should handle UPDATE_USER_INFO_REQUEST', () => {
      expect(
        authReducer(userState, {
          type: types.UPDATE_USER_INFO_REQUEST,
        })
      ).toEqual({
        ...userState,
        updateUserInfoInProcess: true,
      });
    });

    it('should handle UPDATE_USER_INFO_SUCCESS', () => {
      expect(
        authReducer(
          {
            ...userState,
            updateUserInfoInProcess: true,
          },
          {
            type: types.UPDATE_USER_INFO_SUCCESS,
            payload: {
              user: {
                email: 'test.test@test',
                name: 'Test',
              },
            },
          }
        )
      ).toEqual({
        ...userState,
        isAuth: true,
        updateUserInfoInProcess: false,
        updateUserInfoFailed: false,
        updateUserInfoSucess: true,
        email: 'test.test@test',
        name: 'Test',
      });
    });

    it('should handle UPDATE_USER_INFO_ERROR', () => {
      expect(
        authReducer(
          {
            ...userState,
            isAuth: true,
            updateUserInfoInProcess: false,
            updateUserInfoFailed: false,
            updateUserInfoSucess: true,
            email: 'test.test@test',
            name: 'Test',
          },
          {
            type: types.UPDATE_USER_INFO_ERROR,
          }
        )
      ).toEqual({
        ...userState,
        email: 'test.test@test',
        name: 'Test',
        isAuth: false,
        updateUserInfoInProcess: false,
        updateUserInfoFailed: true,
        updateUserInfoSucess: false,
        accessTokenExpired: true,
      });
    });
  });

  describe('update-token', () => {
    it('should handle REFRESH_TOKEN_REQUEST', () => {
      expect(
        authReducer(userState, {
          type: types.REFRESH_TOKEN_REQUEST,
        })
      ).toEqual({
        ...userState,
        refreshTokenInProcess: true,
      });
    });

    it('should handle REFRESH_TOKEN_SUCCESS', () => {
      expect(
        authReducer(
          {
            ...userState,
            refreshTokenInProcess: true,
          },
          {
            type: types.REFRESH_TOKEN_SUCCESS,
            payload: {
              accessToken: 'Bearer test-acess-token',
              refreshToken: 'refresh-test-token',
            },
          }
        )
      ).toEqual({
        ...userState,
        refreshTokenInProcess: false,
        refreshTokenSucess: true,
        refreshTokenFailed: false,
      });
    });

    it('should handle REFRESH_TOKEN_ERROR', () => {
      expect(
        authReducer(
          {
            ...userState,
            refreshTokenInProcess: false,
            refreshTokenSucess: true,
            refreshTokenFailed: false,
          },
          {
            type: types.REFRESH_TOKEN_ERROR,
          }
        )
      ).toEqual({
        ...userState,
        refreshTokenInProcess: false,
        refreshTokenSucess: false,
        refreshTokenFailed: true,
      });
    });
  });
});
