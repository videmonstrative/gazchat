import ChatsList from "./chats_list";

export default class Sidebar extends React.Component {
    render() {
        return (
            <div className="sidebar">
                <div className="tab-content h-100">
                    <ChatsList representChat={this.props.representChat}/>
                </div>
            </div>
        )
    }
}