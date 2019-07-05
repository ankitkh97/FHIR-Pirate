export interface IPatient {
    resourceType: string;
    id: number;
    meta: {
      versionId: number,
      lastUpdated: Date
    };
    text: {
      status: string,
      div: string
    };
    name: [
      {
        use: string,
        text: string,
        family: string,
        given: [
          string
        ]
      }
    ];
    gender: string;
    birthDate: Date;
}
