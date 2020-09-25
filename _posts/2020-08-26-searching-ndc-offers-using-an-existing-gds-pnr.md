---
layout: post
title: Searching NDC offers using an existing GDS PNR
date: 2020-08-26T00:28:00.665Z
---
This feature has been developed to facilitate comparison between GDS and NDC fares, which in some cases can result in significant discounts due to some airlines introducing content differentiation and GDS surcharges.

We start from the scenario you have an existing GDS PNR that might be issued or just on hold.

Let's take this fictional PNR (Amadeus format)

```
1.SMITH/JOHN
2 BA0902 V 25DEC 1 LHRFRA HK1 0705 0940 *1A/E*
3 BA0901 V 28DEC 2 FRALHR HK1 0715 0805 *1A/E*
4 AP TELF 666.66.66.66
5 AP EMAIL USER@MAIL.COM
6 TK TL03AUG/SCQI12279/Q30C0	
10 *SSR FQTV BA HK/ BA111111111/8
14 RM NID: 123456789X BDAY:01/01/70
15 RMZ CONF*FORMAT:PDF
16 RIR 215,00
17 FT *IT9UX1FE14BX
```

Then in Bookingpad, we need to switch the search mode to **PNR Search** by selecting this dropdown menu placed at the top-left of the GUI.

![Bookingpad PNR Search Menu](/assets/uploads/bookingpad_pnr_search-menu.png "Bookingpad PNR Search - Menu selection")

Then the agent only needs to paste the entire PNR text ensuring not to corrupt anyhow the format.

![Bookingpad PNR Search - Paste PNR](/assets/uploads/bookingpad_pnr_search_-_paste_pnr.png "Bookingpad PNR Search - Paste PNR")

Bookingpad will instantly identify the parameters (O&D, passengers, dates, and flights for the originating shopping search for the NDC interface.

By clicking the **Search** button this will bring us directly in a matter of 4-5 seconds to the NDC offer matching the criteria if this matches any NDC offer among the enabled providers/airlines.

These results will include all the cabins and fares combinations delivered by the originating provider/airline in order to facilitate selecting the right fare for the customer.

![Bookingpad_PNR_Search-Show results ](/assets/uploads/bookingpad_pnr_search_-_show_results.png "Bookingpad PNR Search - Show results")