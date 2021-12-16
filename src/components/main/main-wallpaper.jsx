import wallpaperStyles from '../main/wallpaper.module.css'
import { wallpaper } from '../img/import-lmages';

const MainWallpaper = () => {
  return <div className={wallpaperStyles.wallpaper}>
    <img
      src={wallpaper}
      alt="wallpaper"
      className={wallpaperStyles.image}
    />
  </div>
}

export default MainWallpaper;