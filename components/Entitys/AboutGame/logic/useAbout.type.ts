export interface useAboutType {
  fetchVoited: (id: number) => void
  voited: boolean
  isOpenPopup: boolean
  closePopup: () => void
}
