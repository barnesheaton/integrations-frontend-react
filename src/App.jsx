import { useEffect, useState } from 'react'
import axios from 'axios'

import InfiniteScroll from 'react-infinite-scroll-component'

import Navbar from './components/Navbar'
import IntegrationCard from './components/IntegrationCard';
import Pagination from './components/Pagination';

function App() {
  const [searchQuery, setSearchQuery] = useState("");

  const [integrations, setIntegrations] = useState([]);
  const [index, setIndex] = useState(0);


  const getIntegrations = (args) => {
    return axios
    .get('http://localhost:3001/integrations', {
      params: {
        ...args
      }
    })
    .then((res) => {
      return res.data.integrations
    })
    .catch((err) => {
      console.error('Error from Integrations Backend', err);
    });
  }

  useEffect(() => {
    if (index !== 0) {
      appendData();
    }
  }, [index])

  useEffect(() => {
    getIntegrations().then((newIntegrations) => {
      setIntegrations(newIntegrations)
      setIndex(0)
    })
  }, []);

  const onSearch  = (search) => {
    setSearchQuery(search)
    getIntegrations({search}).then((newIntegrations) => {
      setIntegrations(newIntegrations)
      setIndex(0)
    })
  }

  const appendData = async () => {
    getIntegrations({index}).then((newIntegrations) => {
      const temp = [...integrations];
      const loadedData = newIntegrations;
      const appended = temp.concat(loadedData);
      setIntegrations(appended);
    })

    
  };

  const fetchData = async () => {
    if (!searchQuery || searchQuery.length === 0) {
      setIndex((prev) => prev + 1);
    }
  };

  return (
    <>
      <Navbar onSearch={(input) => onSearch(input)} />
      <div className="layout">

      <div className="w-full bg-purple-700">
        <div className="contain min-h-64 flex flex-col justify-center px-12">
          <h1 className="text-left text-xl text-white uppercase mb-4">Integrations</h1>
          <h2 className="text-left text-5xl text-white">Nice fancy headline!</h2>
        </div>
      </div>

      <div className="main-content overflow-auto px-8 pt-8">

        <h3 className='text-xl text-left font-bold sm:hidden'>Search for an Integration</h3>

      <form action="#" method="GET" className="pb-8 sm:hidden">
                            <label htmlFor="topbar-search" className="sr-only">Search</label>
                            <div className="relative mt-1 lg:w-96">
                            <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
                                <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20"> <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/> </svg>
                            </div>
                            <input onChange={(event) => onSearch(event.target.value)} type="text" name="email" id="topbar-search" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full pl-9 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Search" />
                            </div>
                        </form>

        <InfiniteScroll
          dataLength={
            integrations && integrations.length > 0 ? integrations.length : 10
          } 
          next={fetchData}
          hasMore={true}
          scrollableTarget="scrollableDiv"
        >
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {integrations ? (
            integrations.map((item) => {
              return (
                <IntegrationCard data={item} key={item._id} />
              );
            })
          ) : (
              <div>
                No Users
            </div>
          )}
        </div>
        </InfiniteScroll>
        {/* <Pagination currentPage={page} pages={data && Math.ceil(data.total / data.limit)} onClick={onPaginate} /> */}
      </div>
      </div>
          </>
    )
}

export default App;
