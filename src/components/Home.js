import React,{Component} from 'react'
import {connect} from 'react-redux'
import {fetchDog} from './middleware/actions'


class Home extends React.Component{
   
    render(){
        console.log(this.props)
         return(
            <>
          <button onClick={() => this.props.fetchDog()}>Show Dog</button>

            {this.props.loading 
              ? <p>Loading...</p> 
              : this.props.error
                  ? <p>Error, try again</p>
                  : <p><img src={this.props.url}/></p>}
                  </>
        )
    }
}


const  mapStateToProps = (state) => {
  console.log(state,'in map')
    return{
        loading: state.loading,url:state.url,error:state.error
    };
}


const mapDispatchToProps = (dispatch) => {
    return {
        fetchDog: () => {
        dispatch(fetchDog())
      }
    }
  }


export default connect(mapStateToProps, mapDispatchToProps)(Home);