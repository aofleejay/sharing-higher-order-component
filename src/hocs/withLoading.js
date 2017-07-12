import React, { Component } from 'react'
import Loading from '../components/Loading'

const withLoading = (WrappedComponent) => {
  return class ComponentWithLoading extends Component {
    render() {
      return this.props.comments.length === 0 ? <Loading /> : <WrappedComponent {...this.props} />
    }
  }
}

export default withLoading
