
const NavCustom = () => {
    return (<div className="navbar-item">
    <div className="field is-grouped">
      <p className="control">
        <a className="button">
          <span>Tweet</span>
        </a>
      </p>
      <p className="control">
        <a className="button is-primary">
          <span>Download</span>
        </a>
      </p>
    </div>
  </div>
      );
  };
  
  const NavbarDropdown = () => {
   return(<div className="navbar-item has-dropdown">
      <a className="navbar-link">
        Docs
      </a>
  
      <div className="navbar-dropdown">
        <a className="navbar-item">
          Overview
        </a>
        <a className="navbar-item">
          Elements
        </a>
        <a className="navbar-item">
          Components
        </a>
      </div>
    </div>
     );
  };
  
  const NavBurger = () => (<a role="button" className="navbar-burger">
    <span aria-hidden="true"></span>
    <span aria-hidden="true"></span>
    <span aria-hidden="true"></span>
  </a>);
  
  const NavbarItem = (props) =>{
    const {href, children, title,className} = props;
    const classList = ["navbar-item"].concat(className).join(' ');
    return (<a className={classList} title={title} href={href}>{children}</a>);
  };
  
  // const NavBrand = (props) => (<div className="navbar-brand" {...props} />);
  // const NavbarStart = (props) => (<div className="navbar-start" {...props} />);
  // const NavbarEnd = (props) => (<div className="navbar-end" {...props} />);
  // const NavbarMenu = (props) => (<div className="navbar-menu" {...props} />);
  
  const NavBar = () => {
    return (
      <nav className="navbar" role="navigation" aria-label="main navigation">
        <div className="navbar-brand">
           <NavbarItem href="link" title='title'>
             <img src={'https://avatars3.githubusercontent.com/u/60478234?s=64&v=4'} className="biggerImage" alt="logo" />
          </NavbarItem>
          <NavBurger />
        </div>
        <div className="navbar-menu">
          <div className="navbar-start">
              <NavbarItem href="link1" title="Menu1">Menu1</NavbarItem>
              <NavbarItem href="link2" title="Menu2">Menu2</NavbarItem>
              <NavbarDropdown />      
          </div>
      
          <div className="navbar-end">
            <NavCustom />
            <NavbarItem href="link1" title="endMenu1">endMenu1</NavbarItem>
          </div>
       </div>
      </nav>
     );
  };
  
  const App = () => {
    return(<NavBar />);
  };
  
export default App  