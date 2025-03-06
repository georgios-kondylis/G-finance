import React from "react";
import HeaderBox from "@/components/ui/HeaderBox";
import TotalBalanceBox from "@/components/ui/TotalBalanceBox";
import RightSidebar from "@/components/ui/RightSidebar";
import { getLoggedInUser } from "@/lib/actions/user.actions";

const Home = async () => {
  const loggedIn = await getLoggedInUser();
  console.log("LOGGED IN USER:", loggedIn); // Debugging

  return (
    <section className="home">
      <div className="home-content">
        <header className="home-header">
          <HeaderBox
            type="greeting"
            title="welcome"
            user={loggedIn?.name || "Guest"}
            subtext="Access and manage your acount and transactions efficiently"
          />

          <TotalBalanceBox
            accounts={[]}
            totalBanks={1}
            totalCurrentBalance={1250.35}/>
        </header>
        RECENT TRANSACTIOS
      </div>

      <RightSidebar
       user={loggedIn}
       transactions={[]}
       banks={[{currentBalance: 123.50}, {currentBalance: 123.50}]} />
    </section>
  );
};

export default Home;
