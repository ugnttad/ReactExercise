import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import NamePerson from "./NamePerson";
import PeopleList from './PeopleList';
import FirstTeenager from './FirstTeenager';
import AreAllTeenagers from './AreAllTeenagers';
import SortByOccupationAndAge from './SortByOccupationAndAge';
import GroupByOccupation from './GroupByOccupation';
import OldestAndYoungest from './OldestAndYoungest';
import AverageAgeByOccupation from './AverageAgeByOccupation';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <App /> */}

    {/* Exer 2 */}
    {/* <NamePerson /> */}

    {/* Exer 3 4 5 */}
    {/* <PeopleList/> */}

    {/* Exer 6 */}
    <FirstTeenager/>

    {/* Exer 7 */}
    <AreAllTeenagers/>

    {/* Exer 8 */}
    <SortByOccupationAndAge/>

    {/* Exer 9 */}
    <GroupByOccupation/>

    {/* Exer 10 */}
    <OldestAndYoungest/>

    {/* Exer 11 */}
    <AverageAgeByOccupation/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
