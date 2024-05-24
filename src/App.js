import React from 'react';
import PageComponent from './components/PageComponent'; // PageComponent импорттау
import withTimeTracking from './components/withTimeTracking'; // TimeTracking көмегімен HOC импорттадым

// Уақытты бақылау функциясымен PageComponent HOC орнаттым
const TrackedPageComponent = withTimeTracking(PageComponent);

function App() {
  return (
      <div className="App">
          <h1><center> Уақыт </center></h1>
        <TrackedPageComponent />
      </div>
  );
}

export default App;
