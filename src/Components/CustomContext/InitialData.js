/* 
Before you edit:

When editing the 'InitialData', make sure to delete keys 'profile_selected' and 'context_data' in your localStorage to see the changes. 

To access localStorage:

Developer tools > Application > Storage > LocalStorage

*/


// DONOT CHANGE
export const KEY_NAME_PROFILE_SELECTED = 'profile_selected_v2';
export const KEY_NAME_CONTEXT_DATA = 'context_data_v2'


export const InitialData = [
  {
    name: "Anonymous",
    profile: "https://icon-library.com/images/anonymous-user-icon/anonymous-user-icon-2.jpg",
    context: [],
  },
  {
    name: "Romelu Lukaku",
    email : "rlukaku@coveo.com",
    profile: "https://sortitoutsi.net/uploads/megapacks/cutoutfaces/originals/13.13/18007344.png",
    context: [
      {
        active: true,
        keyName: "employment",
        keyValue: "investment",
        customQRF: false,
      },
      {
        active: true,
        keyName: "age",
        keyValue: "60",
        customQRF: false,
      },
    ],
  },
  {
    name: "Justin Henin",
    email : "jhenin@coveo.com",
    profile:
      "https://images0.persgroep.net/rcs/YekfnE4MpVFA0ZpRf6M6bDME32c/diocontent/216086869/_fitwidth/694/?appId=21791a8992982cd8da851550a453bd7f&quality=0.8",
    context: [
      {
        active: true,
        keyName: "age",
        keyValue: "32",
        customQRF: false,
      },
      {
        active: true,
        keyName: "employment",
        keyValue: "insurance",
        customQRF: false,
      },
    ],
  },
];



