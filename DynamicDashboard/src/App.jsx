
import './App.css'
import DashboardGreeting from './components/dynamic-dashboard';
import PremiumMember from './components/premium-member';
import RenderList from './components/task-list';

function App() {

  return (
    <>
      <DashboardGreeting/>
      <PremiumMember/>
      <RenderList/>

    </>
  );
};

export default App;
