import { render, screen, waitFor } from "@testing-library/react";
import '@testing-library/jest-dom'
import { QueryClient, QueryClientProvider } from "react-query";
import reducer, { initialState } from "../../helpers/Reducer";
import { StateProvider, useStateValue } from "../../StateProvider";
import axios from "axios";
import userEvent from "@testing-library/user-event";
import List from "./List";
import React from "react";
import { useContext } from "react";
const mockedAxios = axios as jest.Mocked<typeof axios>;
const queryClient = new QueryClient();
jest.mock("axios");

const data = {
    "data": [
        {
            "id": "OBMNG1",
            "name": "OBM Hotel 1",
            "description": "Etag for the win chocolate biscuit wafer soufflé toffee toffee donut. Tart biscuit wafer pudding chocolate cake oat cake halvah\r\nMarshmallow halvah gingerbread apple pie muffin biscuit. Cake pudding topping pie lemon drops lollipop. Bear claw oat cake jelly beans. Bonbon toffee caramels pudding gingerbread cookie lollipop.",
            "address1": "Address 1",
            "address2": "Address 2",
            "postcode": "WC1R 4PS",
            "town": "London",
            "country": "United Kingdom",
            "countryCode": "GB",
            "starRating": "4",
            "facilities": [
                {
                    "code": "1"
                },
                {
                    "code": "2"
                },
                {
                    "code": "3"
                },
                {
                    "code": "4"
                },
                {
                    "code": "5"
                },
                {
                    "code": "6"
                },
                {
                    "code": "7"
                },
                {
                    "code": "8"
                },
                {
                    "code": "9"
                },
                {
                    "code": "10"
                },
                {
                    "code": "11"
                },
                {
                    "code": "12"
                },
                {
                    "code": "13"
                },
                {
                    "code": "14"
                },
                {
                    "code": "15"
                },
                {
                    "code": "16"
                },
                {
                    "code": "17"
                },
                {
                    "code": "18"
                },
                {
                    "code": "19"
                },
                {
                    "code": "20"
                },
                {
                    "code": "21"
                },
                {
                    "code": "22"
                },
                {
                    "code": "23"
                },
                {
                    "code": "24"
                },
                {
                    "code": "25"
                },
                {
                    "code": "26"
                },
                {
                    "code": "27"
                },
                {
                    "code": "28"
                },
                {
                    "code": "29"
                },
                {
                    "code": "30"
                },
                {
                    "code": "31"
                },
                {
                    "code": "32"
                },
                {
                    "code": "33"
                },
                {
                    "code": "34"
                },
                {
                    "code": "35"
                }
            ],
            "telephone": "12345666",
            "email": "JabbaScript@guestline.com",
            "images": [
                {
                    "url": "https://rl-uk2.azureedge.net/picturemanager/images/OBMNG1/Hotel1.JPG"
                },
                {
                    "url": "https://rl-uk2.azureedge.net/picturemanager/images/OBMNG1/hotel4.jpg"
                },
                {
                    "url": "https://rl-uk2.azureedge.net/picturemanager/images/OBMNG1/room5.jpg"
                }
            ],
            "checkInHours": "14",
            "checkInMinutes": "00",
            "checkOutHours": "11",
            "checkOutMinutes": "00",
            "position": {
                "latitude": "51.507351000",
                "longitude": "-0.127758000",
                "timezone": "GMT"
            }
        },
        {
            "id": "OBMNG2",
            "name": "OBM Hotel 2",
            "description": "Fruitcake brownie sugar plum cotton candy pastry marzipan pie lollipop ice cream. Sweet pie tootsie roll oat cake apple pie candy pastry wafer jelly beans. Cake sweet oat cake chocolate sweet chocolate pudding biscuit.",
            "address1": "10 Palace Place",
            "address2": "",
            "postcode": "SW1E 5BW",
            "town": "London",
            "country": "United Kingdom",
            "countryCode": "GB",
            "starRating": "5",
            "facilities": [],
            "telephone": "54453559",
            "email": "JabbaScript@guestline.com",
            "images": [
                {
                    "url": "https://rl-uk2.azureedge.net/picturemanager/images/OBMNG2/hotel1.jpg",
                    "alt": "Hotel image"
                }
            ],
            "checkInHours": "13",
            "checkInMinutes": "00",
            "checkOutHours": "10",
            "checkOutMinutes": "00",
            "position": {
                "latitude": "1.100000000",
                "longitude": "-1.100000000",
                "timezone": "GMT"
            }
        },
        {
            "id": "OBMNG3",
            "name": "OBM Hotel 3",
            "description": "Chocolate marzipan muffin danish cake chupa chups pastry. Croissant sweet sweet wafer sweet roll chocolate. Carrot cake pudding tart pastry lemon drops croissant cupcake brownie croissant. Sweet lollipop soufflé tart cookie sweet gingerbread pudding croissant.",
            "address1": "10 Carlisle Street",
            "address2": "",
            "postcode": "W1D 3BR",
            "town": "London",
            "country": "United Kingdom",
            "countryCode": "GB",
            "starRating": "3",
            "facilities": [],
            "telephone": "1235345",
            "email": "jabbaservices@guestline.com",
            "images": [
                {
                    "url": "https://rl-uk2.azureedge.net/picturemanager/images/OBMNG3/hotel2.jpg",
                    "alt": "hotel"
                }
            ],
            "checkInHours": "12",
            "checkInMinutes": "00",
            "checkOutHours": "9",
            "checkOutMinutes": "00",
            "position": {
                "latitude": "1.200000000",
                "longitude": "-1.200000000",
                "timezone": "GMT"
            }
        },
        {
            "id": "OBMNG4",
            "name": "OBM Hotel 4",
            "description": "Carrot cake pudding tart pastry lemon drops croissant cupcake brownie croissant. Sweet lollipop soufflé tart cookie sweet gingerbread pudding croissant.\r\nSesame snaps tootsie roll tootsie roll chocolate cake halvah cake dessert. Sesame snaps wafer sweet ice cream cotton candy sugar plum sweet roll. Bonbon candy canes chocolate bar pie halvah caramels jelly-o. Powder chocolate cake carrot cake chupa chups apple pie.",
            "address1": "27 Chapter Way",
            "address2": "",
            "postcode": "SW19 2RF",
            "town": "Liverpool",
            "country": "United Kingdom",
            "countryCode": "GB",
            "starRating": "5",
            "facilities": [],
            "telephone": "123456",
            "email": "jabbaservices@guestline.com",
            "images": [
                {
                    "url": "https://rl-uk2.azureedge.net/picturemanager/images/OBMNG4/hotel3.jpg",
                    "alt": "hotel"
                }
            ],
            "checkInHours": "15",
            "checkInMinutes": "00",
            "checkOutHours": "12",
            "checkOutMinutes": "00"
        }
    ],
    "status": 200,
    "statusText": "OK",
    "headers": {
        "cache-control": "public, max-age=3600",
        "content-length": "1433",
        "content-type": "application/json; charset=utf-8"
    },
    "config": {
        "transitional": {
            "silentJSONParsing": true,
            "forcedJSONParsing": true,
            "clarifyTimeoutError": false
        },
        "transformRequest": [
            null
        ],
        "transformResponse": [
            null
        ],
        "timeout": 0,
        "xsrfCookieName": "XSRF-TOKEN",
        "xsrfHeaderName": "X-XSRF-TOKEN",
        "maxContentLength": -1,
        "maxBodyLength": -1,
        "headers": {
            "Accept": "application/json, text/plain, */*"
        },
        "method": "get",
        "url": "https://obmng.dbm.guestline.net/api/hotels?collection-id=OBMNG"
    },
    "request": {}
}

test("render rating", async () => {
    mockedAxios.get.mockReturnValue(
      Promise.resolve(data)
    );
    const { container }=render(
      <StateProvider initialState={initialState} reducer={reducer}>
        <QueryClientProvider client={queryClient}>
          <List/>
        </QueryClientProvider>
      </StateProvider>
    );

    await waitFor(() => {
      expect(container.querySelector('.list-filter-rating')?.children.length).toBe(5)
    })
});

test.only("render number of adults and change it", async () => {
    mockedAxios.get.mockReturnValue(
      Promise.resolve(data)
    );
    const contextValues = { rating: 1, adults: 0, children: 0, maxAdults: 2 };

    const { container }=render(
      <StateProvider initialState={contextValues} reducer={reducer}>
        <QueryClientProvider client={queryClient}>
          <List/>
        </QueryClientProvider>
      </StateProvider>
    );

    await waitFor(() => {
      expect(container.querySelector('.list-filter-adults p')!.textContent).toEqual('0')
    })
    userEvent.click(container.querySelector('.list-filter-adults')!.children[1])
    expect(container.querySelector('.list-filter-adults p')!.textContent).toEqual('1')
    screen.debug()
    // userEvent.click(container.querySelector('.list-filter-adults')!.children[3])
    // expect(container.querySelector('.list-filter-adults p')!.textContent).toEqual('0')
});