var gdjs;
(function(gdjs2) {
  let adMob;
  (function(adMob2) {
    let AdSizeType;
    (function(AdSizeType2) {
      AdSizeType2[AdSizeType2["BANNER"] = 0] = "BANNER";
      AdSizeType2[AdSizeType2["LARGE_BANNER"] = 1] = "LARGE_BANNER";
      AdSizeType2[AdSizeType2["MEDIUM_RECTANGLE"] = 2] = "MEDIUM_RECTANGLE";
      AdSizeType2[AdSizeType2["FULL_BANNER"] = 3] = "FULL_BANNER";
      AdSizeType2[AdSizeType2["LEADERBOARD"] = 4] = "LEADERBOARD";
      AdSizeType2[AdSizeType2["SMART_BANNER"] = 5] = "SMART_BANNER";
    })(AdSizeType = adMob2.AdSizeType || (adMob2.AdSizeType = {}));
    let bannerAndroidId = "";
    let bannerIosId = "";
    let bannerPosition = "top";
    let bannerRequestedAdSizeType = 5;
    let bannerLoading = false;
    let bannerErrored = false;
    let bannerShowing = false;
    let interstitialLoading = false;
    let interstitialReady = false;
    let interstitialErrored = false;
    let interstitialShowing = false;
    let videoLoading = false;
    let videoReady = false;
    let videoErrored = false;
    let videoShowing = false;
    let videoRewardReceived = false;
    let npaValue = "0";
    adMob2.setTestMode = (enable) => {
      if (typeof admob === "undefined") {
        return;
      }
      admob.setDevMode(enable);
    };
    adMob2.isBannerLoading = () => {
      return bannerLoading;
    };
    adMob2.isBannerShowing = () => {
      return bannerShowing;
    };
    adMob2.isBannerErrored = () => {
      return bannerErrored;
    };
    adMob2.setupBanner = function(androidID, iosID, atTop) {
      if (typeof admob === "undefined") {
        return;
      }
      bannerAndroidId = androidID;
      bannerIosId = iosID;
      bannerPosition = atTop ? "top" : "bottom";
    };
    adMob2.setBannerAdSizeType = (bannerAdSizeType) => {
      const adSizeTypes = {
        BANNER: 0,
        LARGE_BANNER: 1,
        MEDIUM_RECTANGLE: 2,
        FULL_BANNER: 3,
        LEADERBOARD: 4,
        SMART_BANNER: 5
      };
      bannerRequestedAdSizeType = adSizeTypes[bannerAdSizeType] || 5;
    };
    adMob2.showBanner = () => {
      if (typeof admob === "undefined") {
        return;
      }
      bannerLoading = true;
      bannerShowing = false;
      bannerErrored = false;
      admob.banner.show({
        id: {
          android: bannerAndroidId,
          ios: bannerIosId
        },
        position: bannerPosition,
        size: bannerRequestedAdSizeType
      }).then(() => {
        bannerShowing = true;
        bannerLoading = false;
        console.info("AdMob banner successfully shown.");
      }, (error) => {
        bannerShowing = false;
        bannerLoading = false;
        bannerErrored = true;
        console.error("Error while showing an AdMob banner:", error);
      });
    };
    adMob2.hideBanner = () => {
      if (typeof admob === "undefined") {
        return;
      }
      bannerShowing = false;
      admob.banner.hide({
        android: bannerAndroidId,
        ios: bannerIosId
      });
    };
    adMob2.isInterstitialLoading = () => {
      return interstitialLoading;
    };
    adMob2.isInterstitialReady = () => {
      return interstitialReady;
    };
    adMob2.isInterstitialShowing = () => {
      return interstitialShowing;
    };
    adMob2.isInterstitialErrored = () => {
      return interstitialErrored;
    };
    adMob2.loadInterstitial = (androidID, iosID, displayWhenLoaded) => {
      if (typeof admob === "undefined") {
        return;
      }
      if (interstitialLoading || interstitialReady || interstitialShowing) {
        return;
      }
      interstitialLoading = true;
      interstitialReady = false;
      interstitialErrored = false;
      admob.interstitial.load({
        id: {
          android: androidID,
          ios: iosID
        },
        npa: npaValue
      }).then(() => {
        console.info("AdMob interstitial successfully loaded.");
        if (displayWhenLoaded)
          adMob2.showInterstitial();
      }, (error) => {
        interstitialLoading = false;
        interstitialReady = false;
        interstitialErrored = true;
        console.error("Error while loading a interstitial:", error);
      });
    };
    adMob2.showInterstitial = () => {
      if (typeof admob === "undefined") {
        return;
      }
      admob.interstitial.show().then(() => {
      }, (error) => {
        interstitialShowing = false;
        interstitialErrored = true;
        console.error("Error while trying to show an interstitial:", error);
      });
    };
    adMob2.isVideoLoading = () => {
      return videoLoading;
    };
    adMob2.isVideoReady = () => {
      return videoReady;
    };
    adMob2.isVideoShowing = () => {
      return videoShowing;
    };
    adMob2.isVideoErrored = () => {
      return videoErrored;
    };
    adMob2.wasVideoRewardReceived = function(markAsClaimed) {
      const reward = videoRewardReceived;
      if (markAsClaimed) {
        videoRewardReceived = false;
      }
      return reward;
    };
    adMob2.loadVideo = function(androidID, iosID, displayWhenLoaded) {
      if (typeof admob === "undefined") {
        return;
      }
      if (videoLoading || videoReady || videoShowing) {
        return;
      }
      videoLoading = true;
      videoReady = false;
      videoErrored = false;
      admob.rewardVideo.load({
        id: {
          android: androidID,
          ios: iosID
        },
        npa: npaValue
      }).then(() => {
        console.info("AdMob reward video successfully loaded.");
        if (displayWhenLoaded)
          adMob2.showVideo();
      }, (error) => {
        videoLoading = false;
        videoReady = false;
        videoErrored = true;
        console.error("Error while loading a reward video:", error);
      });
    };
    adMob2.showVideo = () => {
      if (typeof admob === "undefined") {
        return;
      }
      admob.rewardVideo.show().then(() => {
      }, (error) => {
        videoShowing = false;
        videoErrored = true;
        console.error("Error while trying to show a reward video:", error);
      });
    };
    adMob2.markVideoRewardAsClaimed = () => {
      videoRewardReceived = false;
    };
    document.addEventListener("admob.banner.load", () => {
      bannerShowing = true;
      bannerLoading = false;
    });
    document.addEventListener("admob.banner.load_fail", () => {
      bannerLoading = false;
    });
    document.addEventListener("admob.banner.open", () => {
    });
    document.addEventListener("admob.banner.exit_app", () => {
    });
    document.addEventListener("admob.banner.close", () => {
    });
    document.addEventListener("admob.interstitial.load", () => {
      interstitialReady = true;
      interstitialLoading = false;
    });
    document.addEventListener("admob.interstitial.load_fail", () => {
      interstitialLoading = false;
    });
    document.addEventListener("admob.interstitial.open", () => {
      interstitialShowing = true;
      interstitialReady = false;
    });
    document.addEventListener("admob.interstitial.close", () => {
      interstitialShowing = false;
    });
    document.addEventListener("admob.interstitial.exit_app", () => {
    });
    document.addEventListener("admob.reward_video.load", () => {
      videoReady = true;
      videoLoading = false;
    });
    document.addEventListener("admob.reward_video.load_fail", () => {
      videoLoading = false;
    });
    document.addEventListener("admob.reward_video.open", () => {
      videoShowing = true;
      videoReady = false;
    });
    document.addEventListener("admob.reward_video.close", () => {
      videoShowing = false;
    });
    document.addEventListener("admob.reward_video.start", () => {
    });
    document.addEventListener("admob.reward_video.complete", () => {
    });
    document.addEventListener("admob.reward_video.reward", () => {
      videoRewardReceived = true;
    });
    document.addEventListener("admob.reward_video.exit_app", () => {
    });
  })(adMob = gdjs2.adMob || (gdjs2.adMob = {}));
})(gdjs || (gdjs = {}));
//# sourceMappingURL=admobtools.js.map
