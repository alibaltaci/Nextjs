import classes from './comment-list.module.css';

function CommentList( props ) {

  const { items } = props;

  return (
    <ul className={classes.comments}>
      {/* Render list of comments - fetched from API */}

      {/* https://stackoverflow.com/questions/69080597/%C3%97-typeerror-cannot-read-properties-of-undefined-reading-map */}
      {items?.map( (item) => (   
          // <li key={ item.id } >
          <li key={ item._id } >
            <p>{ item.text }</p>
            <div>
              By <address>{ item.name }</address>
            </div>
          </li>
        ))}

    </ul>
  );
}

export default CommentList;
