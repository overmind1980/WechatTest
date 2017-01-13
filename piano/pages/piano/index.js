Page({
  onReady: function (e) {
    this.A4 = wx.createAudioContext('A4')
    this.B4 = wx.createAudioContext('B4')
    this.C4 = wx.createAudioContext('C4')
    this.D4 = wx.createAudioContext('D4')
    this.E4 = wx.createAudioContext('E4')
    this.F4 = wx.createAudioContext('F4')
    this.G4 = wx.createAudioContext('G4')
    this.A3 = wx.createAudioContext('A3')
    this.B3 = wx.createAudioContext('B3')
    this.G3 = wx.createAudioContext('G3')
  },
  playA4: function () {
    this.A4.play()
  },
  playB4: function () {
    this.B4.play()
  },
  playC4: function () {
    this.C4.play()
  },
  playD4: function () {
    this.D4.play()
  },
  playE4: function () {
    this.E4.play()
  },
  playF4: function () {
    this.F4.play()
  },
  playG4: function () {
    this.G4.play()
  },
  playG3: function () {
    this.G3.play()
  },
  playA3: function () {
    this.A3.play()
  },
  playB3: function () {
    this.B3.play()
  },
})