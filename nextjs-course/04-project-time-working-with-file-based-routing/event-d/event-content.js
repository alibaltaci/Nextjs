import classes from './event-content.module.css';

function EventContent( props ) {

  console.log(props);

  const { description } = props;

  return (
    <section className={classes.content}>
      { description }
    </section>
  );
}

export default EventContent;
