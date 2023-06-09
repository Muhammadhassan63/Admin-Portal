import React, { useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { FiSettings } from 'react-icons/fi';
import { TooltipComponent } from '@syncfusion/ej2-react-popups';

import { Navbar, Footer, Sidebar, ThemeSettings } from './components';
import {  EPPDA, PoliceOfficer,  PoliceStation, Heatmap, ColorPicker, Dispatcher, Graph, Feedback, WantedCriminals, Reports, CreateDispatcher } from './pages';
import './App.css';

import { useStateContext } from './contexts/ContextProvider';
import CreatePoliceStation from './pages/CreatePoliceStation';
import CreatePoliceOfficer from './pages/CreatePoliceOfficer';
import UploadWantedCriminals from './pages/UploadWantedCriminals';
import PopupMessage from './components/PopupMessage';
import UpdateDispatcher from './pages/UpdateDispatcher';
import UpdatePoliceOfficer from './pages/UpdatePoliceOfficer';
import UpdateStation from './pages/UpdateStation';

const App = () => {
  const { setCurrentColor, setCurrentMode, currentMode, activeMenu, currentColor, themeSettings, setThemeSettings } = useStateContext();

  useEffect(() => {
    const currentThemeColor = localStorage.getItem('colorMode');
    const currentThemeMode = localStorage.getItem('themeMode');
    if (currentThemeColor && currentThemeMode) {
      setCurrentColor(currentThemeColor);
      setCurrentMode(currentThemeMode);
    }
  }, []);

  return (
    <div className={currentMode === 'Dark' ? 'dark' : ''}>
      <BrowserRouter>
        <div className="flex relative dark:bg-main-dark-bg">
          <div className="fixed right-4 bottom-4" style={{ zIndex: '1000' }}>
            <TooltipComponent
              content="Settings"
              position="Top"
            >
              <button
                type="button"
                onClick={() => setThemeSettings(true)}
                style={{ background: currentColor, borderRadius: '50%' }}
                className="text-3xl text-white p-3 hover:drop-shadow-xl hover:bg-light-gray"
              >
                <FiSettings />
              </button>

            </TooltipComponent>
          </div>
          {activeMenu ? (
            <div className="w-72 fixed sidebar dark:bg-secondary-dark-bg bg-white ">
              <Sidebar />
            </div>
          ) : (
            <div className="w-0 dark:bg-secondary-dark-bg">
              <Sidebar />
            </div>
          )}
          <div
            className={
              activeMenu
                ? 'dark:bg-main-dark-bg  bg-main-bg min-h-screen md:ml-72 w-full  '
                : 'bg-main-bg dark:bg-main-dark-bg  w-full min-h-screen flex-2 '
            }
          >
            <div className="fixed md:static bg-main-bg dark:bg-main-dark-bg navbar w-full ">
              <Navbar />
            </div>
            <div>
              {themeSettings && (<ThemeSettings />)}

              <Routes>
                {/* dashboard  */}
                <Route path="/" element={(<EPPDA />)} />
                {/* pages  */}
                <Route path="/officer" element={<PoliceOfficer />} />
                <Route path="/dispatcher" element={<Dispatcher />} />
                <Route path="/station" element={<PoliceStation />} />

                {/* statistics  */}
                <Route path="/heatmap" element={<Heatmap />} />
                <Route path="/graph" element={<Graph />} />
                <Route path="/dispatchercreate" element={<CreateDispatcher />} />
                <Route path="/stationcreate" element={<CreatePoliceStation />} />


                <Route path="/feedback" element={<Feedback />} />
                <Route path="/wanted-criminals" element={<WantedCriminals />} />
                <Route path="/reports" element={<Reports />} />
                <Route path="/color-picker" element={<ColorPicker />} />
                <Route path="/createofficer" element={<CreatePoliceOfficer />} />
                <Route path="/uploadcriminals" element={<UploadWantedCriminals />} />
                <Route path="/message" element={<PopupMessage />} />
                <Route path='/dispatcher/update/:id' element={<UpdateDispatcher />} />
                <Route path='/officer/update/:id' element={<UpdatePoliceOfficer />} />
                <Route path='/station/update/:id' element={<UpdateStation />} />

                
                


         
              </Routes>
            </div>
            <Footer />
          </div>
        </div>
      </BrowserRouter>
    </div>
  );
};

export default App;
