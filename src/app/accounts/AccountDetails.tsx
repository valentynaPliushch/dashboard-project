import SideMenu from "@/app/components/accountDetails/SideMenu";
import MainPage from "@/app/components/accountDetails/MainPage";
import Layout from "@/app/components/Layout";

const AccountDetails = () => {
  return (
    <div className="mb-4">
      <h3 className="title">Account Details</h3>
      <Layout>
        <div className="flex flex-row">
          <SideMenu />
          <MainPage />
        </div>
      </Layout>
    </div>
  );
};

export default AccountDetails;
