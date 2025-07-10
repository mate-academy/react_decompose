// import a css file containig article styles
import './Article.css';
// Create an Article function returning the HTML of article block
const Article = () => (
  <article className="article">
    <h1 className="article__title">Headline</h1>
    <p className="article__paragraph">
      In elementum lorem eget est euismod ornare. Phasellus sit amet
      pellentesque mauris. Aliquam quis malesuada ex. Nullam eu aliquam nibh.
      Mauris molestie, urna accumsan ornare semper, augue nibh posuere lorem,
      vitae feugiat sem magna eget massa. Vivamus quis tincidunt dolor.Fusce
      efficitur, orci non vestibulum consequat, lectus turpisbibendum odio, in
      efficitur leo felis sed justo. Fusce commodo iaculisorci, quis imperdiet
      urna. Sed mollis facilisis lacus non condimentum.Nunc efficitur massa non
      neque elementum semper. Vestibulum loremarcu, tincidunt in quam et,
      feugiat venenatis augue. Donec sed tincidunt tellus, a facilisis magna.
      Proin sit amet viverra nibh,bibendum gravida felis. Vivamus ut nunc id
      mauris posuere pellentesque. Praesent tincidunt id odio id feugiat.
    </p>
    <p className="article__paragraph">
      In ac nisi lacus. Fusce est dolor, tincidunt ut bibendum vitae,fermentum
      ac quam. Aliquam pretium tristique nibh quis iaculis. In etcursus ex, eu
      aliquet ex. Proin facilisis lacus sit amet sapienultrices, ut vehicula
      arcu lobortis. Vivamus mollis ipsum ut hendreritmolestie. Morbi lacinia,
      sapien eu dictum dignissim, tellus tortorcongue magna,sit amet bibendum
      libero nisi id massa.
    </p>
    <p className="article__paragraph">
      Donec arcu elit, euismod vel lobortis eu, fringilla sit amet dolor. Cras
      congue, massa nec sagittis mollis, dui felis ultrices magna,tincidunt
      finibus lorem quam in sem. Morbi odio turpis, pulvinar sitamet vulputate
      quis, ultricies eu libero. Donec ac maximus neque, necmaximus nibh. Morbi
      rhoncus convallis urna, accumsan porta loremhendrerit in. Cras eget nisl
      dui. Morbi faucibus nisi eget ipsumsemper vulputate. Mauris nec tincidunt
      lectus. Aenean ac mi consequatvelit dignissim consectetur. Fusce placerat
      ac ipsum ac eleifend.Aenean quis faucibus ex.
    </p>
    <p className="article__paragraph">
      Cras egestas tempor nibh, a fermentum lorem sollicitudin non. Nulla
      facilisi. In at elit id leo tristique condimentum. Donec at est nulla.
      Mauris egestas magna ut laoreet pretium. Sed ultrices suscipitvestibulum.
      Lorem ipsum dolor sit amet, consectetur adipiscing elit.Fusce id sapien
      eros. Vivamus viverra ultricies gravida. Nam urnanibh, blandit avulputate
      at, vehicula non nulla. Aenean ut nulla leo.Praesent in ullamcorper est.
    </p>
    <p className="article__paragraph">
      Pellentesque habitant morbi tristique senectus et netus et malesuadafames
      ac turpis egestas. Phasellus bibendum nec arcu eu lobortis. Namconvallis
      faucibus ante sed porta. Nullam ut convallis elit, quisvenenatis nunc.
      Curabitur sed sem eget velit condimentum rutrum in etorci. Nunc non
      suscipit eros. Suspendisse porta sem vel justo commododictum. Aliquam erat
      ligula, fringilla nec suscipit sed, porta vitaeturpis. Vestibulum rhoncus
      placerat nulla vitae suscipit. Curabitur consectetur ex ut odio tristique
      vehicula. Ut ligula tortor, tinciduntquis sodales vitae, ornare a turpis.
      Proin sit amet finibus enim. Fusce tempus a neque vitae tempor. Aenean
      rutrum, libero iaculisinterdum vulputate, dui eros vehicula nisi, at
      interdum enim lacus eudiam.
    </p>
  </article>
);

// Add a default export statement for Article component to use it in the other files
export default Article;
