
export default class ChatsList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            error: null,
            isLoaded: false,
            items: []
        }
    }
    componentDidMount() {
        fetch("/api/chats")
            .then(res => res.json())
            .then(
                (result) => {
                    this.setState({
                        isLoaded: true,
                        items: result.items
                    })
                },
                (error) => {
                    this.setState({
                        isLoaded: true,
                        error
                    })
                }
            )
    }
    handleClick(chatUuid) {
        this.props.representChat(chatUuid)
    }
    render() {
        const listItems = this.state.items.map((item) =>
            <a key={item.uuid} className="text-reset nav-link p-0 mb-6" href="#" onClick={this.handleClick.bind(this, item.uuid)}>
                <div className="card card-active-listener">
                    <div className="card-body">
                        <div className="media">
                            <div className="avatar avatar-online mr-5">
                                <img className="avatar-img" src={item.avatar} alt={item.name}/>
                            </div>
                            <div className="media-body overflow-hidden">
                                <div className="d-flex align-items-center mb-1">
                                    <h6 className="text-truncate mb-0 mr-auto">{item.name}</h6>
                                    <p className="small text-muted text-nowrap ml-4">{item.last_time}</p>
                                </div>
                                <div className="text-truncate">
                                    {item.is_typing
                                        ? <span>is typing<span className="typing-dots"><span>.</span><span>.</span><span>.</span></span></span>
                                        : item.last_message
                                    }
                                </div>
                            </div>
                        </div>
                    </div>
                    {item.unread_count > 0 &&
                    <div className="badge badge-circle badge-primary badge-border-light badge-top-right">
                        <span>{item.unread_count}</span>
                    </div>
                    }
                </div>
            </a>
        )

        return (
            <div className="tab-pane fade h-100 show active" id="tab-content-dialogs">
                <div className="d-flex flex-column h-100">
                    <div className="hide-scrollbar">
                        <div className="container-fluid py-6">
                            <h2 className="font-bold mb-6">Чаты</h2>
                            <form className="mb-6">
                                <div className="input-group">
                                    <input type="text" className="form-control form-control-lg" placeholder="Search for messages or users..." aria-label="Search for messages or users..."/>
                                    <div className="input-group-append">
                                        <button className="btn btn-lg btn-ico btn-secondary btn-minimal" type="submit">
                                            <i className="fe-search"/>
                                        </button>
                                    </div>
                                </div>
                            </form>
                            <div className="text-center hide-scrollbar d-flex my-7" data-horizontal-scroll="">
                                <a href="#" className="d-block text-reset mr-7 mr-lg-6">
                                    <div className="avatar avatar-sm avatar-online mb-3">
                                        <img className="avatar-img" src="assets/images/avatars/2.jpg" alt="Image Description"/>
                                    </div>
                                    <div className="small">William</div>
                                </a>

                                <a href="#" className="d-block text-reset mr-7 mr-lg-6">
                                    <div className="avatar avatar-sm avatar-online mb-3">
                                        <img className="avatar-img" src="assets/images/avatars/3.jpg" alt="Image Description"/>
                                    </div>
                                    <div className="small">Simon</div>
                                </a>

                                <a href="#" className="d-block text-reset mr-7 mr-lg-6">
                                    <div className="avatar avatar-sm avatar-online mb-3">
                                        <img className="avatar-img" src="assets/images/avatars/4.jpg" alt="Image Description"/>
                                    </div>
                                    <div className="small">Thomas</div>
                                </a>

                                <a href="#" className="d-block text-reset mr-7 mr-lg-6">
                                    <div className="avatar avatar-sm avatar-online mb-3">
                                        <img className="avatar-img" src="assets/images/avatars/5.jpg" alt="Image Description"/>
                                    </div>
                                    <div className="small">Zane</div>
                                </a>

                                <a href="#" className="d-block text-reset mr-7 mr-lg-6">
                                    <div className="avatar avatar-sm mb-3">
                                        <img className="avatar-img" src="assets/images/avatars/6.jpg" alt="Image Description"/>
                                    </div>
                                    <div className="small">Thomas</div>
                                </a>

                                <a href="#" className="d-block text-reset mr-7 mr-lg-6">
                                    <div className="avatar avatar-sm mb-3">
                                        <img className="avatar-img" src="assets/images/avatars/7.jpg" alt="Image Description"/>
                                    </div>
                                    <div className="small">William</div>
                                </a>

                                <a href="#" className="d-block text-reset mr-7 mr-lg-6">
                                    <div className="avatar avatar-sm mb-3">
                                        <img className="avatar-img" src="assets/images/avatars/8.jpg" alt="Image Description"/>
                                    </div>
                                    <div className="small">Simon</div>
                                </a>

                                <a href="#" className="d-block text-reset mr-7 mr-lg-6">
                                    <div className="avatar avatar-sm mb-3">
                                        <img className="avatar-img" src="assets/images/avatars/9.jpg" alt="Image Description"/>
                                    </div>
                                    <div className="small">Thomas</div>
                                </a>
                            </div>
                            <nav className="nav d-block list-discussions-js mb-n6">
                                {listItems}
                            </nav>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

