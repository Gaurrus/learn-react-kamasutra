import wallpaper from './assets/export';

import wallpaperStyles from '../main/wallpaper.module.css'

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