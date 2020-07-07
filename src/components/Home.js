import React from 'react'
import {connect} from 'react-redux'
import {getNews} from '../middleware/actions'


class Home extends React.Component{

  componentDidMount () {
    this.props.getNews()
  } 

    render(){
         return(
            <>
              {
              this.props.loading 
              ?
              <h1>LOADING</h1>
              :
              null
              }
              {
                this.props.article
                ?
                // <img src={this.props.article.n} alt="" />
              <h1>{this.props.article.name}</h1>
                :
                null
              }

          </>
        )
    }
}


const  mapStateToProps = (state) => {
    return{
        loading: state.loading,
        article: state.news,
    };
}


const mapDispatchToProps = {
  getNews: getNews,
};


export default connect(mapStateToProps, mapDispatchToProps)(Home);