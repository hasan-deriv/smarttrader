import useAuthorize from '../api/hooks/useAuthorize';
import { getCurrentDomain } from './websocket/config';

type TObjParams<T extends number> = {
    [K in `acct${T}`]: string;
} & {
    [K in `cur${T}`]: string;
} & {
    [K in `token${T}`]: string;
};

type TModifiedAccountsList = NonNullable<ReturnType<typeof useAuthorize>['data']['account_list']>[number] & {
    token?: string;
};

type TClientObject = Record<string, TModifiedAccountsList>;

export const storeClientAccounts = (
    obj_params: TObjParams<number>,
    account_list: ReturnType<typeof useAuthorize>['data']['account_list']
) => {
    const map_names: { [key: string]: string } = {
        country: 'residence',
        landing_company_name: 'landing_company_shortcode',
    };
    const client_object = {} as TClientObject;
    let active_loginid = '';

    account_list?.forEach(account => {
        Object.keys(account).forEach(param => {
            if (param === 'loginid') {
                if (!active_loginid && !account.is_disabled) {
                    if (!account.is_virtual) {
                        active_loginid = account[param] ?? '';
                    } else if (account.is_virtual) {
                        // TODO: [only_virtual] remove this to stop logging non-SVG clients into virtual
                        active_loginid = account[param] ?? '';
                    }
                }
            } else {
                const param_to_set: keyof TModifiedAccountsList | keyof typeof map_names = map_names[param] || param;
                const value_to_set =
                    typeof account[param as keyof typeof account] === 'undefined'
                        ? ''
                        : account[param as keyof typeof account];
                if (!(account.loginid && account.loginid in client_object)) {
                    client_object[account.loginid ?? ''] = {};
                }
                if (account.loginid && client_object[account.loginid]) {
                    client_object[account.loginid][param_to_set] = value_to_set;
                }
            }
        });
    });

    let i = 1;
    while (obj_params[`acct${i}`]) {
        const loginid = obj_params[`acct${i}`];
        const token = obj_params[`token${i}`];
        if (loginid && token) {
            client_object[loginid].token = token;
        }
        i++;
    }

    // if didn't find any login ID that matched the above condition
    // or the selected one doesn't have a token, set the first one
    if (!active_loginid || !client_object[active_loginid].token) {
        active_loginid = obj_params.acct1;
    }
    return client_object;
    // // TODO: send login flag to GTM if needed
    // if (active_loginid && Object.keys(client_object).length) {
    //     localStorage.setItem('active_loginid', active_loginid);
    //     localStorage.setItem('client.accounts', JSON.stringify(client_object));
    //     this.syncWithLegacyPlatforms(active_loginid, this.accounts);
    // }
};

export const getTopLevelDomain = () => {
    const current_domain = getCurrentDomain();
    return current_domain ? current_domain.split('.').splice(-1) : 'com';
};
