export type PlacesSearchResultItem = {
  id: string;
  place_name: string;
  address_name: string;
};

export interface Place {
  place_name: string;
  address_name: string;
  x: number;
  y: number;
}
