import React, { Component } from 'react';
import './App.sass';


class App extends Component {
  render() {
    return (
      <div>
        <Header/>
        <Home>
          <HomeHero>
            <Hero/>
          </HomeHero>

          <HomeSlideshow>
            <SlideImages>
              <SlideImage><img className="slide-img" src="/img/shoes/shoe1.png" alt=""/></SlideImage>
              <SlideImage><img className="slide-img" src="/img/shoes/sweater1.png" alt=""/></SlideImage>
            </SlideImages>
            <SlideDescriptions>
              <SlideDescription>{"NEW NIKE SHOES OUT"}</SlideDescription>
              <SlideDescription>{"NEW NIKE SWEAT OUT"}</SlideDescription>
            </SlideDescriptions>
            <SlideBackgrounds>
              <SlideBackground><img className="slide-bg" src="/img/shoes/man.png" alt=""/></SlideBackground>
              <SlideBackground><img className="slide-bg" src="/img/shoes/shoe3.png" alt=""/></SlideBackground>
            </SlideBackgrounds>
            <HomeToggles>
              <HomeToggle/>
              <HomeToggle/>
            </HomeToggles>
          </HomeSlideshow>
          
          <HomeCategories>
            <HomeCategory>{"Shoes"}</HomeCategory>
            <HomeCategory>{"Sweaters"}</HomeCategory>
          </HomeCategories>
        </Home>
      </div>
    );
  }
}




class Home extends Component{
  state = {
    activeIndex: 0
  }

  selectTabIndex = (activeIndex) =>{
        this.setState({ activeIndex })
  }
  
  render(){

    const children = React.Children.map(this.props.children, (child) =>{
      return React.cloneElement(child, {
        activeIndex: this.state.activeIndex, 
        onSelectTab: this.selectTabIndex
      })
    })

    return(
      <div className="home">
        {children}
      </div>
    )
  }
}



class HomeHero extends Component{
  render(){
    const activeIndex = this.props.activeIndex
    const children = React.Children.map(this.props.children, (child) =>{
      return React.cloneElement(child, {
        activeIndex: activeIndex
      })
    })
    return(
      <div className="home-left">
        {children}
      </div>
    )
  }
}

class Hero extends Component {
  render() {
    return (
      <div className="hero">
        <div className="hero-text-holder">
          <h1 className="hero-text-h1">Summer Inspiration</h1>
          <p className="hero-text-p">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </div>
        <div className="hero-counter-holder">
          <h2 className="hero-text-counter">{'0' + (this.props.activeIndex + 1)}</h2>
        </div>
      </div>
    );
  }
}




class HomeSlideshow extends Component{


  render(){
    const activeIndex = this.props.activeIndex;
    const children = React.Children.map(this.props.children, (child, index) =>{
      return React.cloneElement(child, {
        activeIndex: activeIndex,
        onSelectTab: (index) => this.props.onSelectTab(index)
      })
    })
    return(
      <div className="home-center">
        {children}
      </div>
    )
  }
}

class SlideImages extends Component{
  render(){
    const { activeIndex } = this.props;
    const children = React.Children.map(this.props.children, (child, index) =>{
      return React.cloneElement(child, {
        isActive: index === activeIndex
      })
    })
    return(
      <div className="slide-holder">
        {children}
      </div>
    )
  }
}

class SlideImage extends Component{
  render(){
    const isActive = this.props.isActive
    return(
      <div className={isActive ? 'slide active' : 'slide'}>
          {this.props.children}
      </div>
    )
  }
}

class SlideDescriptions extends Component{
  render(){
    const {activeIndex, children} = this.props
    return(
      <div className="slide-description-holder">
        {children[activeIndex]}
      </div>
    )
  }
}

class SlideDescription extends Component{
  render(){
    return(
      <div className="slide-description"> {this.props.children}</div>
    )
  }
}


class SlideBackgrounds extends Component{
  render(){
    const {activeIndex, children} = this.props
    return(
      <div>
        {children[activeIndex]}
      </div>
    )
  }
}

class SlideBackground extends Component{
  render(){
    return(
      <div className="slide-bg-holder">
        {this.props.children}
      </div>
    )
  }
}


class HomeToggles extends Component{
  render(){
    const activeIndex = this.props.activeIndex
    const children = React.Children.map(this.props.children, (child, index) =>{
      return React.cloneElement(child, {
        isActive: index === activeIndex,
        activeIndex: activeIndex,
        onSelect: () => this.props.onSelectTab(index)
      })
    })
    return(
      <div className="toggle-holder">
        <div className="toggle-left">
          <p className="toggle-text">01</p>
        </div>
        <div className="toggle-center">
        {children}
        </div>
        <div className="toggle-right">
          <p className="toggle-text" >02</p>
        </div>
      </div>

    )
  }
}

class HomeToggle extends Component{
  render(){
    const {isActive} = this.props;
    return(
      <div className={isActive ? 'toggle active' : 'toggle'}  onClick={this.props.onSelect} >
      </div>
    )
  }
}



class HomeCategories extends Component{
  render(){
    const {activeIndex} = this.props;
    const children = React.Children.map(this.props.children, (child, index) =>{
      return React.cloneElement(child, {
        isActive: index === activeIndex,
        onSelect: () => this.props.onSelectTab(index)
      })
    })
    return(
      <div className="home-right">
        <div className="category-holder">
          {children}
        </div>
      </div>
    )
  }
}

class HomeCategory extends Component{
  render(){
    const {isActive} = this.props;
    return(
      <div className="category-name-div" onClick={this.props.onSelect}>
        <p className={isActive ? 'category-name active' : 'category-name'}>{this.props.children}</p>
      </div>
    )
  }
}



class Header extends Component {
  render() {
    return (
      <div className="header">
         <div className="header-left">
            <div className="header-left-mobile"></div>
            <div className="header-left-desktop">
              <div className="header-left-img-holder">
                <img className="header-left-img" alt="Logo" src="/img/nike-swoosh.png"/>
              </div>
              <div className="header-left-link-holder">
                <p className="header-left-link">Men</p>
                <p className="header-left-link">Women</p>
                <p className="header-left-link">Kids</p>
              </div>
            </div>
         </div>
         <div className="header-center"></div>
         <div className="header-right">
            <div className="header-right-mobile"></div>
            <div className="header-right-desktop">
              <div className="header-right-search-holder">
                {/* search would go here */}
              </div>
              <div className="header-right-cart-holder">
                {/* cart goes here */}
              </div>
            </div>
         </div>
      </div>
    );
  }
}




export default App;
