import { MainLayout } from "../components/MainLayout";
import { getCookie } from "../utils/cookies";

const DashboardPage = () => {
  const addExpense = async () => {
    const token = getCookie("token");

    try {
      const res = await fetch("http://127.0.0.1:5000/expenses/create", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({ title: "Testing Expense by UI", amount: 1000 }),
      });

      console.log(res);
      const data = await res.json();
      console.log(data);

      if (data.success === false) {
        alert(data.message);
        return;
      }

      console.log(data);
      alert(data.message);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <MainLayout>
      <div className="text-xl text-blue-900">
        <h1>Dashboard</h1>

        <button onClick={addExpense}>Add Expense</button>
      </div>
    </MainLayout>
  );
};

export default DashboardPage;
