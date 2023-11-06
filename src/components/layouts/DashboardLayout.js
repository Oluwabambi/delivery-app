import SideMenu from './SideMenu';

const DashboardLayout = ({ children }) => {
  return (
    <div className="d-flex flex-column min-vh-100">
        <div className="app-wrapper flex-grow-1 flex-column d-flex">
            <SideMenu></SideMenu>
            {children}
        </div>
    </div>
  )
}

export default DashboardLayout