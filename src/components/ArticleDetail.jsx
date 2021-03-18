export default function ArticleDetail(props) {
    return (
        <div className="container">
            <h1>{props.title}</h1>
            <h4> {props.author.username} </h4>
            <h3> {props.description} </h3>
            <p> {props.body} </p>
        </div>
    )
}