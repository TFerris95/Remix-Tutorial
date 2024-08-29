export const meta = () => {
    return [{ title: 'Information' }]
  }
  
  export default function Info() {
    return (
      <div style={{ fontFamily: 'system-ui, sans-serif', lineHeight: '1.4' }}>
        <h1>Information</h1>
        <p>This is my first basic Remix project. Here I will be ccompleting some basic tasks with Remix.</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris non nulla laoreet, pellentesque quam sed, dictum ligula. Integer vulputate mi sit amet quam posuere ultricies. 
            Pellentesque ullamcorper ultrices mollis. Nam eu tellus ut nulla imperdiet fringilla. Maecenas sollicitudin mollis dictum. 
            Pellentesque elit est, condimentum ut pretium quis, congue in velit. Pellentesque cursus dolor non lectus tristique dignissim. Nulla non placerat turpis. 
            Mauris ac dolor at quam placerat iaculis. Phasellus tempor tempus justo, ac sagittis odio luctus id. Sed maximus nulla eu metus varius malesuada eget at lectus. 
            Ut vel metus a sem scelerisque lobortis non vel mi. Donec et justo rutrum, efficitur risus eget, fermentum est. Proin finibus, eros sit amet finibus pulvinar, turpis dolor volutpat turpis, eget molestie lacus dui quis tellus. 
            Sed sapien nisi, iaculis vel sagittis ac, fermentum ac ex.
        </p>
        <img src="/problem1.png" alt="Problem 1" className="center"/>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris non nulla laoreet, pellentesque quam sed, dictum ligula. Integer vulputate mi sit amet quam posuere ultricies. 
            Pellentesque ullamcorper ultrices mollis. Nam eu tellus ut nulla imperdiet fringilla. Maecenas sollicitudin mollis dictum. 
            Pellentesque elit est, condimentum ut pretium quis, congue in velit. Pellentesque cursus dolor non lectus tristique dignissim. Nulla non placerat turpis. 
            Mauris ac dolor at quam placerat iaculis. Phasellus tempor tempus justo, ac sagittis odio luctus id. Sed maximus nulla eu metus varius malesuada eget at lectus. 
            Ut vel metus a sem scelerisque lobortis non vel mi. Donec et justo rutrum, efficitur risus eget, fermentum est. Proin finibus, eros sit amet finibus pulvinar, turpis dolor volutpat turpis, eget molestie lacus dui quis tellus. 
            Sed sapien nisi, iaculis vel sagittis ac, fermentum ac ex.
        </p>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris non nulla laoreet, pellentesque quam sed, dictum ligula. Integer vulputate mi sit amet quam posuere ultricies. 
            Pellentesque ullamcorper ultrices mollis. Nam eu tellus ut nulla imperdiet fringilla. Maecenas sollicitudin mollis dictum. 
            Pellentesque elit est, condimentum ut pretium quis, congue in velit. Pellentesque cursus dolor non lectus tristique dignissim. Nulla non placerat turpis. 
            Mauris ac dolor at quam placerat iaculis. Phasellus tempor tempus justo, ac sagittis odio luctus id. Sed maximus nulla eu metus varius malesuada eget at lectus. 
            Ut vel metus a sem scelerisque lobortis non vel mi. Donec et justo rutrum, efficitur risus eget, fermentum est. Proin finibus, eros sit amet finibus pulvinar, turpis dolor volutpat turpis, eget molestie lacus dui quis tellus. 
            Sed sapien nisi, iaculis vel sagittis ac, fermentum ac ex.
        </p>
        <video autoPlay muted loop controls className="center">
            <source src="/carvideo.webm" type="video/webm"/>
            Your browser does not support HTML video.
        </video>
      </div>
    )
  }