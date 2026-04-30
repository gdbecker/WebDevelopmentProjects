// import fs from "fs";

// export abstract class CsvFileReader<T> {
//   data: MatchData[] = [];

//   constructor(public fileName: string) {}

//   abstract mapRow(row: string[]): MatchData;

//   read(): void {
//     this.data = fs
//       .readFileSync(this.fileName, {
//         encoding: "utf-8",
//       })
//       .split("\n")
//       .map((row: string): string[] => {
//         return row.split(",");
//       })
//       .map(this.mapRow);
//   }
// }

import fs from 'fs';

export abstract class CsvFileReader<T> {
  data: T[] = []; // Change MatchData[] to T[]

  constructor(public filename: string) {}

  abstract mapRow(row: string[]): T; // Change MatchData to T

  read(): void {
    this.data = fs
      .readFileSync(this.filename, {
        encoding: 'utf-8'
      })
      .split('\n')
      .map((row: string): string[] => {
        return row.split(',');
      })
      .map(this.mapRow);
  }
}
