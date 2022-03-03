import { render, screen, waitFor } from "@testing-library/react";
import '@testing-library/jest-dom'
import { QueryClient, QueryClientProvider } from "react-query";
import reducer, { initialState } from "../../helpers/Reducer";
import { StateProvider } from "../../StateProvider";
import axios from "axios";
import HotelCard from "./HotelCard";
import userEvent from "@testing-library/user-event";
const mockedAxios = axios as jest.Mocked<typeof axios>;
const queryClient = new QueryClient();
jest.mock("axios");
let props: any = {
  hotel: {
    id: "OBMNG1",
    name: "Hotel 1",
    address1: "address 1",
    address2: "address 2",
    starRating: 3,
    images: [
      {
        url: "https://myimage1.com",
        alt: "room image"
      },
      {
        url: "https://myimage2.com",
        alt: "room image"
      },
    ],
  },
};
const data = {
  status: 200,
  data: {
    rooms: [
      {
        id: "SUPE",
        name: "Superior Double",
        longDescription: "Superior Double",
        occupancy: { maxAdults: 6, maxChildren: 5, maxOverall: 11 },
        disabledAccess: false,
        bedConfiguration: "None",
        images: [],
        facilities: [],
      },
      {
        id: "STND",
        name: "Standard Double",
        longDescription: "Standard Double",
        occupancy: { maxAdults: 2, maxChildren: 0, maxOverall: 2 },
        disabledAccess: false,
        bedConfiguration: "None",
        images: [],
        facilities: [],
      },
      {
        id: "JUNIOR",
        name: "King/Twin Junior Suite",
        longDescription: "Junior Suite",
        occupancy: { maxAdults: 2, maxChildren: 1, maxOverall: 3 },
        disabledAccess: false,
        bedConfiguration: "Both",
        images: [],
        facilities: [],
      },
      {
        id: "LOFT",
        name: "Loft Suite",
        longDescription: "Loft Suite",
        occupancy: { maxAdults: 2, maxChildren: 1, maxOverall: 3 },
        disabledAccess: false,
        bedConfiguration: "None",
        images: [],
        facilities: [],
      },
      {
        id: "TWIN",
        name: "Standard Twin",
        longDescription: "Standard Twin",
        occupancy: { maxAdults: 2, maxChildren: 1, maxOverall: 2 },
        disabledAccess: false,
        bedConfiguration: "None",
        images: [],
        facilities: [],
      },
      {
        id: "SEAVU",
        name: "Sea View Suite",
        longDescription: "Sea View Suite",
        occupancy: { maxAdults: 2, maxChildren: 2, maxOverall: 4 },
        disabledAccess: false,
        bedConfiguration: "None",
        images: [],
        facilities: [],
      },
    ],
    ratePlans: [
      {
        id: "24_HOUR",
        shortDescription: "24 Hour Rate",
        prePayment: "Deposit",
        prePaymentValue: 20,
        prePaymentIsPercentage: true,
      },
      {
        id: "BB_SAVER",
        shortDescription: "Saver - Bed and Breakfast",
        longDescription:
          "I am a detailed description of this beautiful rate which provides me with much more information of what I would be getting if I was to select this beautiful cute rate. Shame I am a fake rate description, one day I would like to be a real one.",
        prePayment: "Reserve",
        cancellationPolicy: {
          name: "Cancellation Poll",
          text: "I am a cancellation policy with loads of information of how we will punish you if you decide you want to cancel the reservation into this beautiful room. Mwahahahaha",
          penalty: "Fixed",
          applicable: "Full Stay",
          amount: 200,
        },
      },
      {
        id: "BAR_RO",
        shortDescription: "Special Promotional Rate",
        longDescription:
          "This rate is our special promotional rate and is for accommodation only.",
        prePayment: "Reserve",
        cancellationPolicy: {
          name: "Cancellation Poll",
          text: "I am a cancellation policy with loads of information of how we will punish you if you decide you want to cancel the reservation into this beautiful room. Mwahahahaha",
          penalty: "Fixed",
          applicable: "Full Stay",
          amount: 200,
        },
      },
      {
        id: "GROUPS",
        shortDescription: "Groups RO",
        prePayment: "Reserve",
      },
      {
        id: "BAR_BB",
        shortDescription: "Best Flexible - Bed and Breakfast",
        longDescription: "Detailed Description Text Field",
        prePayment: "Pay now",
        cancellationPolicy: {
          name: "Cancellation Poll",
          text: "I am a cancellation policy with loads of information of how we will punish you if you decide you want to cancel the reservation into this beautiful room. Mwahahahaha",
          penalty: "Fixed",
          applicable: "Full Stay",
          amount: 200,
        },
      },
    ],
  },
  headers: {},
  config: {},
  statusText: "",
}

test("render hotel name", async () => {
  mockedAxios.get.mockReturnValue(
    Promise.resolve(data)
  );
  render(
    <StateProvider initialState={initialState} reducer={reducer}>
      <QueryClientProvider client={queryClient}>
        <HotelCard {...props} />
      </QueryClientProvider>
    </StateProvider>
  );
  await waitFor(() => {
    expect(screen.getByText('Hotel 1')).toBeInTheDocument()
  })
});

test("render hotel address1", async () => {
  mockedAxios.get.mockReturnValue(
    Promise.resolve(data)
  );
  render(
    <StateProvider initialState={initialState} reducer={reducer}>
      <QueryClientProvider client={queryClient}>
        <HotelCard {...props} />
      </QueryClientProvider>
    </StateProvider>
  );
  await waitFor(() => {
    expect(screen.getByText('address 1')).toBeInTheDocument()
  })
})

test("render hotel address2", async () => {
  mockedAxios.get.mockReturnValue(
    Promise.resolve(data)
  );
  render(
    <StateProvider initialState={initialState} reducer={reducer}>
      <QueryClientProvider client={queryClient}>
        <HotelCard {...props} />
      </QueryClientProvider>
    </StateProvider>
  );
  await waitFor(() => {
    expect(screen.getByText('address 2')).toBeInTheDocument()
  })
})
test("render hotel rating", async () => {
  mockedAxios.get.mockReturnValue(
    Promise.resolve(data)
  );
  const { container } = render(
    <StateProvider initialState={initialState} reducer={reducer}>
      <QueryClientProvider client={queryClient}>
        <HotelCard {...props} />
      </QueryClientProvider>
    </StateProvider>
  );
  await waitFor(() => {
    expect(container.querySelector('.hotelCard-header-rating')?.children.length).toBe(5)
  })
})

test("render rooms", async () => {
  mockedAxios.get.mockReturnValue(
    Promise.resolve(data)
  );
  const { container } = render(
    <StateProvider initialState={initialState} reducer={reducer}>
      <QueryClientProvider client={queryClient}>
        <HotelCard {...props} />
      </QueryClientProvider>
    </StateProvider>
  );
  await waitFor(() => {
    // expect(container.querySelector('.hotelCard-rooms')?.children.length).toBe(6)
    screen.getByRole('heading', {level: 2, name: 'Standard Double'})


  })
})

test("render room name", async () => {
  mockedAxios.get.mockReturnValue(
    Promise.resolve(data)
  );
  render(
    <StateProvider initialState={initialState} reducer={reducer}>
      <QueryClientProvider client={queryClient}>
        <HotelCard {...props} />
      </QueryClientProvider>
    </StateProvider>
  );
  await waitFor(() => {
    expect(screen.getByText('King/Twin Junior Suite')).toBeInTheDocument()
  })
})

test("render room max adults", async () => {
  mockedAxios.get.mockReturnValue(
    Promise.resolve(data)
  );
  render(
    <StateProvider initialState={initialState} reducer={reducer}>
      <QueryClientProvider client={queryClient}>
        <HotelCard {...props} />
      </QueryClientProvider>
    </StateProvider>
  );
  await waitFor(() => {
    expect(screen.getByText('Adults: 6')).toBeInTheDocument()
  })
})

test("render room max children", async () => {
  mockedAxios.get.mockReturnValue(
    Promise.resolve(data)
  );
  render(
    <StateProvider initialState={initialState} reducer={reducer}>
      <QueryClientProvider client={queryClient}>
        <HotelCard {...props} />
      </QueryClientProvider>
    </StateProvider>
  );
  await waitFor(() => {
    expect(screen.getByText('Children: 5')).toBeInTheDocument()
  })
})

test("render working room image carousel", async () => {
  mockedAxios.get.mockReturnValue(
    Promise.resolve(data)
  );
  const { container, getByAltText } =render(
    <StateProvider initialState={initialState} reducer={reducer}>
      <QueryClientProvider client={queryClient}>
        <HotelCard {...props} />
      </QueryClientProvider>
    </StateProvider>
  );
  let image:any
  await waitFor(() => {
    image = getByAltText('room image');
  })

  expect(image).toHaveAttribute('src', 'https://myimage1.com')

  userEvent.click(container.querySelector('.hotelCard-header-images-rightArrow')!)

  image = getByAltText('room image');

  expect(image).toHaveAttribute('src', 'https://myimage2.com')
})