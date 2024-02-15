import React from 'react';

const Blogpa = () => {
  return (
    <div className='m-20'>
      <hr />
      <div className="bg-white px-4 py-6 sm:px-6 lg:px-8 justify-center">
        <div className="mx-auto max-w-7xl">
          <div>
            <div className="sm:hidden">
              <label htmlFor="tabs" className="sr-only">Select a tab</label>
              <select id="tabs" name="tabs" className="block w-full rounded-md border-gray-300 focus:border-indigo-500 focus:ring-indigo-500">
                <option className='text-orange-400'>All</option>
                <option>Company News</option>
                <option>Appretices</option>
                <option>Graduates</option>
                <option>Case Studies</option>
                <option>Colleague tories</option>
                <option>Events</option>
              </select>
            </div>
            <div className="hidden sm:block">
              <nav className="flex space-x-4" aria-label="Tabs">
                <a href="#"  aria-current="page" className=" hover:bg-gray-100 text-orange-700 px-3 py-2 font-medium text-sm rounded-md">All</a>
                <a href="#" className="text-gray-500 hover:bg-gray-100 text-gray-700 px-3 py-2 font-medium text-sm rounded-md">Company News</a>
                <a href="#" className="bg-gray-100 text-gray-700 px-3 py-2 font-medium text-sm rounded-md">Appretices</a>
                <a href="#" className="text-gray-500 hover:bg-gray-100 text-gray-700 px-3 py-2 font-medium text-sm rounded-md">Graduates</a>
                <a href="#" className="text-gray-500 hover:bg-gray-100 text-gray-700 px-3 py-2 font-medium text-sm rounded-md">Case Studies</a>
                <a href="#" className="bg-gray-100 text-gray-700 px-3 py-2 font-medium text-sm rounded-md">Colleague toriess</a>
                <a href="#" className="text-gray-500 hover:bg-gray-100 text-gray-700 px-3 py-2 font-medium text-sm rounded-md">Events</a>
              </nav>
            </div>
          </div>
        </div>
      </div>
      <hr />
    </div>
  );
};

export default Blogpa;
