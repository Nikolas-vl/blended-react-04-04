import Grid from '../Grid/Grid.jsx';
import GridItem from '../GridItem/GridItem.jsx';
import PhotosGalleryItem from '../PhotosGalleryItem/PhotosGalleryItem.jsx';

export const PhotosGallery = ({ photos }) => {
  return (
    <Grid>
      {photos.map(photo => (
        <GridItem key={photo.id}>
          <PhotosGalleryItem
            avg_color={photo.avg_color}
            src={photo.src}
            alt={photo.alt}
          />
        </GridItem>
      ))}
    </Grid>
  );
};

export default PhotosGallery;
