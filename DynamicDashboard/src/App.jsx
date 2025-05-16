
import './App.css'
import DisplayDate from './components/current-date';
import DashboardGreeting from './components/dynamic-dashboard';
import PremiumMember from './components/premium-member';
import RenderList from './components/task-list';

function App() {

  return (
    <>
      <DisplayDate/> <hr/>
      <DashboardGreeting/>
      <PremiumMember/> <hr/>
      <RenderList/>

    </>
  );
};

export default App;
