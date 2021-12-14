import wallpaperStyles from '../components/wallpaper.module.css'

const MainWallpaper = () => {
  return <div className={wallpaperStyles.wallpaper}>
    <img
      src="https://store.hp.com/app/assets/images/uploads/prod/25-best-hd-wallpapers-laptops159561982840438.jpg"
      alt="wallpaper"
      className={wallpaperStyles.image}
    />
  </div>
}

export default MainWallpaper;