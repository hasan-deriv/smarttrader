import { deleteQueryParams, readLoginQueryParams } from "Utils/url";
import useAuthorize from "./useAuthorize";
import { storeClientAccounts } from "Utils/utility";
import { useEffect, useMemo } from "react";

const useLogin = () => {
  const search = window.location.search;
  const client_account = readLoginQueryParams();
  const { data: account_list } = useAuthorize();
  let is_logged_in = false;

  if (localStorage.getItem("active_loginId")) {
    is_logged_in = true;
  }

  const client_object = useMemo(() => {
    if (!account_list.account_list) return {};
    return storeClientAccounts(client_account, account_list.account_list);
  }, [account_list.account_list, client_account]);

  useEffect(() => {
    if (
      Object.keys(client_account).length &&
      Object.keys(client_object).length
    ) {
      localStorage.setItem("active_loginId", client_account["acct1"]);
      localStorage.setItem("client.accounts", JSON.stringify(client_object));
      if (search) deleteQueryParams();
    }
  }, [account_list, client_account, client_object, search]);
  return { is_logged_in };
};

export default useLogin;
