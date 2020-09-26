
export default function Navigation()  {
    return (
        <div className="navigation navbar navbar-light justify-content-center py-xl-7">

            <a href="#" className="d-none d-xl-block mb-6">

            </a>

            <ul className="nav navbar-nav flex-row flex-xl-column flex-grow-1 justify-content-between justify-content-xl-center py-3 py-lg-0"
                role="tablist">

                <li className="nav-item d-none d-xl-block invisible flex-xl-grow-1">
                    <a className="nav-link position-relative p-0 py-xl-3" href="#" title="">
                        <i className="icon-lg fe-x"/>
                    </a>
                </li>

                <li className="nav-item">
                    <a className="nav-link position-relative p-0 py-xl-3" data-toggle="tab"
                       href="#tab-content-create-chat" title="Create chat" role="tab">
                        <i className="icon-lg fe-edit"/>
                    </a>
                </li>

                <li className="nav-item mt-xl-9">
                    <a className="nav-link position-relative p-0 py-xl-3" data-toggle="tab" href="#tab-content-friends"
                       title="Friends" role="tab">
                        <i className="icon-lg fe-users"/>
                    </a>
                </li>

                <li className="nav-item mt-xl-9">
                    <a className="nav-link position-relative p-0 py-xl-3 active" data-toggle="tab"
                       href="#tab-content-dialogs" title="Chats" role="tab">
                        <i className="icon-lg fe-message-square"/>
                        <div className="badge badge-dot badge-primary badge-bottom-center"/>
                    </a>
                </li>

                <li className="nav-item mt-xl-9">
                    <a className="nav-link position-relative p-0 py-xl-3" data-toggle="tab" href="#tab-content-user"
                       title="User" role="tab">
                        <i className="icon-lg fe-user"/>
                    </a>
                </li>

                <li className="nav-item mt-xl-9 d-none d-xl-block flex-xl-grow-1">
                    <a className="nav-link position-relative p-0 py-xl-3" data-toggle="tab" href="#tab-content-demos"
                       title="Demos" role="tab">
                        <i className="icon-lg fe-layers"/>
                    </a>
                </li>

                <li className="nav-item mt-xl-9">
                    <a className="nav-link position-relative p-0 py-xl-3" href="settings.html" title="Settings">
                        <i className="icon-lg fe-settings"></i>
                    </a>
                </li>

            </ul>

        </div>
    )
}