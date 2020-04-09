import React, {useState, useEffect} from 'react'
import { connect } from 'react-redux';

import Search from '../components/Search';
import Categories from '../components/Categories';
import Carousel from '../components/Carousel';
import CarouselItem from '../components/CarouselItem';


import '../assets/styles/App.scss';

import useInitialState from '../hooks/useInitialState';


const Home = () => {
    const initialState = useInitialState(API);
    
    return(
        <>
            <Search />
            {
                initialState.mylist > 0 &&
                <Categories title="Mi Lista">
                    <Carousel>
                        <CarouselItem/>
                    </Carousel>
                </Categories>
            }

            <Categories title="Tendencias">
                <Carousel>
                    {
                        initialState.trends.map(item => 
                            <CarouselItem key={item.id} {...item}/>    
                        )
                    }
                </Carousel>
            </Categories>

            <Categories title="Originales de Platzi Video">
                <Carousel>
                    {
                        initialState.originals.map(item => 
                            <CarouselItem key={item.id} {...item}/>    
                        )
                    }
                </Carousel>
            </Categories>
        </>
    );

}

const mapStateToProps = state => {
    return {
        myList: state.myList,
        trends: state.trends,
        originals: state.originals,
    };
};

export default connect(mapStateToProps, null)(Home)