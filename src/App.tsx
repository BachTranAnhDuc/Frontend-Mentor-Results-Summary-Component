import React, { FC, ReactElement } from 'react';

import SummaryComponent from './SummaryComponent';
import data from './data.json';

const App: FC = (): ReactElement => {
  return (
    <section className="font-sans h-screen bg-neutral-pale-blue grid justify-items-center items-center">
      <div className="bg-neutral-white desktop:h-[30rem] desktop:w-[48rem] mobile:h-full mobile:w-full grid desktop:grid-cols-section rounded-xl shadow-lg shadow-neutral-light-lavender">
        <div className="bg-gradient-to-t from-gradient-light-royalblue to-gradient-light-slateblue rounded-xl p-11 grid grid-rows-leftComponent justify-items-center items-center">
          <h1 className="text-lg text-neutral-light-lavender font-medium">
            Your Result
          </h1>

          <div className="rounded-full bg-gradient-to-t from-gradient-persian-blue to-gradient-violet-blue h-36 w-36 p-5 grid grid-rows-circle justify-items-center items-center">
            <p className="font-extrabold text-6xl text-neutral-white">76</p>
            <p className="font-normal text-base text-neutral-light-lavender">
              of 100
            </p>
          </div>

          <div className="grid grid-rows-footer justify-items-center items-center px-8 gap-y-2">
            <h1 className="font-semibold text-xl text-neutral-white tracking-widest">
              Great
            </h1>
            <p className="font-normal text-base text-neutral-light-lavender text-center">
              You scored higher than 65% of the people who have taken these
              tests
            </p>
          </div>
        </div>

        <div className="bg-neutral-white p-11 grid grid-rows-rightComponent gap-y-6 rounded-xl">
          <h1 className="text-lg font-semibold">Summary</h1>

          <div className="self-center grid grid-rows-rightContainer gap-y-6">
            {data.map((el, index) => {
              return (
                <SummaryComponent
                  key={index}
                  category={el.category}
                  score={el.score}
                ></SummaryComponent>
              );
            })}

            {/* <div className="bg-primary-red-trans px-3 h-12 rounded-md grid grid-cols-itemRight gap-x-3 items-center">
              <img src={iconReaction} alt="reaction" />
              <h2 className="text-primary-red-light font-bold">Reaction</h2>

              <div className="justify-self-end grid grid-cols-repeat-3-max gap-x-2">
                <p className="font-bold">80</p>
                <span>/</span>
                <p className="text-neutral-dark-grayblue">100</p>
              </div>
            </div>

            <div className="bg-primary-orangey-trans px-3 h-12 rounded-md grid grid-cols-itemRight gap-x-3 items-center">
              <img src={iconMemory} alt="memory" />
              <h2 className="font-bold text-primary-orangey-yellow">Memory</h2>

              <div className="justify-self-end grid grid-cols-repeat-3-max gap-x-2">
                <p className="font-bold">80</p>
                <span>/</span>
                <p className="text-neutral-dark-grayblue">100</p>
              </div>
            </div>

            <div className="bg-primary-green-trans px-3 h-12 rounded-md grid grid-cols-itemRight gap-x-3 items-center">
              <img src={iconVerbal} alt="verbal" />
              <h2 className="font-bold text-primary-green-teal">Verbal</h2>

              <div className="justify-self-end grid grid-cols-repeat-3-max gap-x-2">
                <p className="font-bold">80</p>
                <span>/</span>
                <p className="text-neutral-dark-grayblue">100</p>
              </div>
            </div>

            <div className="bg-primary-cobalt-trans px-3 h-12 rounded-md grid grid-cols-itemRight gap-x-3 items-center">
              <img src={iconVisual} alt="visual" />
              <h2 className="font-bold text-primary-cobalt-blue">Visual</h2>

              <div className="justify-self-end grid grid-cols-repeat-3-max gap-x-2">
                <p className="font-bold">80</p>
                <span>/</span>
                <p className="text-neutral-dark-grayblue">100</p>
              </div>
            </div> */}
          </div>

          <button className="bg-neutral-dark-grayblue hover:bg-gradient-to-t from-primary-cobalt-blue to-gradient-violet-blue px-6 py-3 rounded-full text-neutral-white font-normal tracking-wider ease-linear">
            Continue
          </button>
        </div>
      </div>
    </section>
  );
};

export default App;
