--
-- PostgreSQL database dump
--

\restrict VVrgrO6MZ50o8R0gdpWluZoIzhE7IMw2X845nJFqDon8gb0zaFvYVZA9hKmcxhI

-- Dumped from database version 16.13 (Debian 16.13-1.pgdg13+1)
-- Dumped by pg_dump version 16.13 (Debian 16.13-1.pgdg13+1)

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

SET default_tablespace = '';

SET default_table_access_method = heap;

--
-- Name: Product; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public."Product" (
    id text NOT NULL,
    name text NOT NULL,
    description text DEFAULT ''::text NOT NULL,
    brand text[] NOT NULL,
    type text NOT NULL,
    image text DEFAULT ''::text NOT NULL,
    "createdAt" timestamp(3) without time zone DEFAULT CURRENT_TIMESTAMP NOT NULL,
    "updatedAt" timestamp(3) without time zone NOT NULL
);


ALTER TABLE public."Product" OWNER TO postgres;

--
-- Name: User; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public."User" (
    id text NOT NULL,
    email text NOT NULL,
    password text NOT NULL,
    "createdAt" timestamp(3) without time zone DEFAULT CURRENT_TIMESTAMP NOT NULL
);


ALTER TABLE public."User" OWNER TO postgres;

--
-- Name: _prisma_migrations; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public._prisma_migrations (
    id character varying(36) NOT NULL,
    checksum character varying(64) NOT NULL,
    finished_at timestamp with time zone,
    migration_name character varying(255) NOT NULL,
    logs text,
    rolled_back_at timestamp with time zone,
    started_at timestamp with time zone DEFAULT now() NOT NULL,
    applied_steps_count integer DEFAULT 0 NOT NULL
);


ALTER TABLE public._prisma_migrations OWNER TO postgres;

--
-- Data for Name: Product; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public."Product" (id, name, description, brand, type, image, "createdAt", "updatedAt") FROM stdin;
cmnye3fwf000274p79qnu974k	165 Ø KWANGSHIN AMERIKANSKIY KIRISH KLAPANI		{kwangshin}	valves_in_out	/img/products/1776157125836-hlpdtgk4ctr.jpg	2026-04-14 08:58:49.023	2026-04-16 06:53:20.495
cmo14dk4w00018sl80fwmhesv	165 Ø  KWANGSHIN KIRISH KLAPONI		{kwangshin}	valves_in_out	/img/products/1776322214840-sk0geyxnljs.JPG	2026-04-16 06:50:03.44	2026-04-16 06:53:25.349
cmo14exs800028sl8j7yzm9u2	165 Ø KWANGSHIN CHIQISH KLAPONI		{kwangshin}	valves_in_out	/img/products/1776322266791-0wobaznaoahd.JPG	2026-04-16 06:51:07.784	2026-04-16 06:53:29.449
cmo14g2r400038sl8zi36eofe	140 Ø KWANGSHIN KIRISH KLAPONI		{kwangshin}	valves_in_out	/img/products/1776322319962-z37ogme7n9j.jpg	2026-04-16 06:52:00.88	2026-04-16 06:53:32.871
cmo14h19l00048sl8abytker5	140 Ø KWANGSHIN CHIQISH KLAPONI		{kwangshin}	valves_in_out	/img/products/1776322364467-x43mts95zxi.JPG	2026-04-16 06:52:45.609	2026-04-16 06:53:36.381
cmo14j80r00058sl8hd7mti4j	120 Ø KWANGSHIN KIRISH KLAPONI		{kwangshin}	valves_in_out	/img/products/1776322461847-ndk78ddhva.JPG	2026-04-16 06:54:27.675	2026-04-16 06:54:27.675
cmo14mjhl00088sl8ffwdbbvm	110 Ø KWANGSHIN CHIQISH KLAPONI		{kwangshin}	valves_in_out	/img/products/1776322621595-sq5x9hb6ega.jpg	2026-04-16 06:57:02.505	2026-04-16 06:57:42.951
cmo16283l000f8sl8tx7dp0si	161 Ø TIANCHEN CHIQISH KLAPONI		{tianchen}	valves_in_out	/img/products/1776325032536-9kak0t87nz8.jpg	2026-04-16 07:37:13.857	2026-04-16 07:37:40.934
cmo180ep1000g8sl80rakqsph	110 Ø TIANCHEN KIRISH KLAPONI		{tianchen}	valves_in_out	/img/products/1776328305477-44wpcvj8w7z.jpg	2026-04-16 08:31:48.325	2026-04-16 08:31:48.325
cmo2ltu3n000090ohsentcv1p	SICHUAN OBRATNIY KLAPON L22		{sichuan}	valves_check	/img/products/1776411969835-wi9k86hqfbj.jpg	2026-04-17 07:46:22.499	2026-04-17 07:46:22.499
cmo14qh8o00098sl8qxwk990g	93 Ø KWANGSHIN KIRISH KLAPONI		{kwangshin}	valves_in_out	/img/products/1776322796936-9x2znl5jh4.JPG	2026-04-16 07:00:06.216	2026-04-16 07:00:06.216
cmo14rbio000a8sl83ox6oj5h	93 Ø KWANGSHIN CHIQISH KLAPONI		{kwangshin}	valves_in_out	/img/products/1776322841722-gcbdgs8zgv.JPG	2026-04-16 07:00:45.456	2026-04-16 07:00:45.456
cmo14rwuo000b8sl8f4rnoj0a	88 Ø KWANGSHIN KIRISH KLAPONI		{kwangshin}	valves_in_out	/img/products/1776322869797-c4xcn7j8ey.JPG	2026-04-16 07:01:13.104	2026-04-16 07:01:13.104
cmo14saox000c8sl8zu3euio6	88 Ø KWANGSHIN CHIQISH KLAPONI		{kwangshin}	valves_in_out	/img/products/1776322889793-j7bx75u72m.JPG	2026-04-16 07:01:31.041	2026-04-16 07:01:31.041
cmo15x6up000d8sl8v1jbqirw	90 Ø KWANGSHIN KONCENTRIK KLAPONI		{kwangshin}	valves_in_out	/img/products/1776324798205-x2exf8a5wks.jpg	2026-04-16 07:33:18.96	2026-04-16 07:33:18.96
cmo1616rd000e8sl8yqgkh0j1	161 Ø TIANCHEN KIRISH KLAPONI		{kwangshin}	valves_in_out	/img/products/1776324978392-vagiq4r79v8.jpg	2026-04-16 07:36:25.465	2026-04-16 07:36:25.465
cmo146aab00008sl8dlw1rbdy	165 Ø KWANGSHIN AMERIKANSKIY CHIQISH KLAPANI		{kwangshin}	valves_in_out	/img/products/1776321862679-yjw76zhszw.JPG	2026-04-16 06:44:24.082	2026-04-16 06:53:16.885
cmo14la3400078sl8miw6l3v5	110 Ø KWANGSHIN KIRISH KLAPONI		{kwangshin}	valves_in_out	/img/products/1776322562322-1q906rqow43.jpg	2026-04-16 06:56:03.664	2026-04-16 06:56:03.664
cmo14jo8c00068sl8x66u49my	120 Ø KWANGSHIN CHIQISH KLAPONI		{kwangshin}	valves_in_out	/img/products/1776322487548-tpvjypi0vfo.JPG	2026-04-16 06:54:48.684	2026-04-16 06:57:36.904
cmo182f9f000h8sl8iq7dewtr	110 Ø TIANCHEN CHIQISH KLAPONI		{tianchen}	valves_in_out	/img/products/1776328400960-gcvgqi2lzq6.jpg	2026-04-16 08:33:22.371	2026-04-16 08:33:22.371
cmo18797l000j8sl8o0nzbw4x	105 Ø TIANCHEN CHIQISH KLAPONI		{tianchen}	valves_in_out	/img/products/1776328626448-prq3gnamcws.jpg	2026-04-16 08:37:07.809	2026-04-16 08:37:07.809
cmo189v34000k8sl8bw1599df	80 Ø TIANCHEN KIRISH KLAPONI		{tianchen}	valves_in_out	/img/products/1776328747917-cy5txfz1von.jpg	2026-04-16 08:39:09.472	2026-04-16 08:39:09.472
cmo18bv8e000l8sl8ydxk97xm	80 Ø TIANCHEN CHIQISH KLAPONI		{tianchen}	valves_in_out	/img/products/1776328828552-8dxp6o2q96e.jpg	2026-04-16 08:40:42.974	2026-04-16 08:40:42.974
cmo18fzvg000m8sl8nof6q34a	55/65 Ø TIANCHEN KIRISH KLAPONI		{tianchen}	valves_in_out	/img/products/1776329032878-g47fgk76k4.jpg	2026-04-16 08:43:55.612	2026-04-16 08:43:55.612
cmo18hgir000n8sl8o6dwutgz	55/65 Ø TIANCHEN CHIQISH KLAPONI		{tianchen}	valves_in_out	/img/products/1776329095871-ogy6npz65xc.jpg	2026-04-16 08:45:03.843	2026-04-16 08:45:03.843
cmo19huoj000q8sl80kdkzegp	KWANGSHIN OBRATNIY KLAPON NRV-025A		{kwangshin}	valves_check	/img/products/1776330786031-lixdjxw4dh.jpg	2026-04-16 09:13:21.811	2026-04-16 09:13:21.811
cmo19iy76000r8sl8h0uvuw77	KWANGSHIN OBRATNIY KLAPON NRV-020A		{kwangshin}	valves_check	/img/products/1776330846870-mozqhu53zi.jpg	2026-04-16 09:14:13.026	2026-04-16 09:14:13.026
cmo19jy6c000s8sl8gh4z3ikr	KWANGSHIN OBRATNIY KLAPON NRV-015A		{kwangshin}	valves_check	/img/products/1776330898315-joflkhw73jf.jpg	2026-04-16 09:14:59.652	2026-04-16 09:14:59.652
cmo2mc28x000790ohzbdjtc8x	PKA PREDOXRANITEL KLAPON		{kwangshin}	valves_safety	/img/products/1776412828663-wiauba6t9ne.jpg	2026-04-17 08:00:32.865	2026-04-17 08:00:32.865
cmo2mk04b000890oh1pppuc89	165 Ø KWANGSHIN MEDNIY KOLCA		{kwangshin}	copper_rings	/img/products/1776413194766-j4os03vcxv.jpg	2026-04-17 08:06:43.355	2026-04-17 08:06:43.355
cmo2mk836000990ohycvu1j57	140 Ø KWANGSHIN MEDNIY KOLCA		{kwangshin}	copper_rings	/img/products/1776413212925-b41uvs5vztq.jpg	2026-04-17 08:06:53.682	2026-04-17 08:06:53.682
cmo2mkj4p000a90oh9i24yhxf	120 Ø KWANGSHIN MEDNIY KOLCA		{kwangshin}	copper_rings	/img/products/1776413226460-g7398aql3g.jpg	2026-04-17 08:07:07.993	2026-04-17 08:07:07.993
cmo2lvp8o000190oh38mf0h4l	SICHUAN OBRATNIY KLAPON S22		{sichuan}	valves_check	/img/products/1776412063543-c3ug1ksfe0u.jpg	2026-04-17 07:47:49.512	2026-04-17 07:47:49.512
cmo19ddig000o8sl8161ksd8g	SICHUAN KIRISH KLAPONI		{sichuan}	valves_in_out	/img/products/1776330591142-37whp4fvvvz.JPG	2026-04-16 09:09:52.936	2026-04-16 09:09:52.936
cmo19dx9y000p8sl8lok23nd4	SICHUAN CHIQISH KLAPONI		{sichuan}	valves_in_out	/img/products/1776330617214-shydvk5ln6c.JPG	2026-04-16 09:10:18.55	2026-04-16 09:10:18.55
cmo2lzvc4000390ohcczf7ns8	TIANCHEN OBRATNIY KLAPON L28		{tianchen,sichuan}	valves_check	/img/products/1776412262206-47krmdi6yty.jpg	2026-04-17 07:51:04.036	2026-04-21 07:49:53.31
cmo2m1mk9000490oh53c6rgdb	TIANCHEN OBRATNIY KLAPON S25		{tianchen,sichuan}	valves_check	/img/products/1776412341705-ijqn14r2cu.jpg	2026-04-17 07:52:25.977	2026-04-21 07:49:58.264
cmo2m30tk000590ohuokac643	TIANCHEN OBRATNIY KLAPON S22		{tianchen,sichuan}	valves_check	/img/products/1776412407826-ci8io8yjrl.jpg	2026-04-17 07:53:31.112	2026-04-21 07:50:04.336
cmo2m4pfo000690ohhgy9uoh2	TIANCHEN OBRATNIY KLAPON L32		{tianchen,sichuan}	valves_check	/img/products/1776412487021-wrkcolwfusl.jpg	2026-04-17 07:54:49.668	2026-04-21 07:50:11.596
cmo2mktyz000b90oh8qk2kid0	110 Ø KWANGSHIN MEDNIY KOLCA		{kwangshin}	copper_rings	/img/products/1776413239261-hjuz5zgdauk.jpg	2026-04-17 08:07:22.043	2026-04-17 08:07:22.043
cmo2ml5d8000c90ohzjns05xd	93 Ø KWANGSHIN MEDNIY KOLCA		{kwangshin}	copper_rings	/img/products/1776413254358-riguvotf3t.jpg	2026-04-17 08:07:36.812	2026-04-17 08:07:36.812
cmo2mrfj6000e90ohkkvvu714	KWANGSHIN STUPEN ORTASIDAGI MEDNIY KOLCA		{kwangshin}	copper_rings	/img/products/1776413545919-6b0s11rx984.jpg	2026-04-17 08:12:29.922	2026-04-17 08:12:29.922
cmo2q1wby000o90ohew84mw6r	SICHUAN ALYUMIN KOLCA Ø 105 x 95 x 2		{sichuan}	copper_rings	/img/products/1776419076041-e0k0bmbfxgs.jpg	2026-04-17 09:44:37.102	2026-04-17 09:44:37.102
cmo45g9pr001h90ohajgoz2f6	 KWANGSHIN 203 KRAN  REMKOPLEKT		{kwangshin}	repair_kits	/img/products/1776505401629-3hkfw793c6d.jpg	2026-04-18 09:43:28.047	2026-04-18 09:43:40.878
cmo2oymsn000g90ohgy9f9i0p	TIANCHEN ALYUMIN KOLCA   Ø 124 x 117 x 4		{tianchen}	copper_rings	/img/products/1776417243795-ot0jcqeyk2h.jpg	2026-04-17 09:14:05.159	2026-04-17 09:16:32.627
cmo45l4jb001j90ohy7te156k	KWANGSHIN 3 HODOVOY KRAN REMKOPLEKT		{kwangshin}	repair_kits	/img/products/1776505630371-091oow7rqdvq.jpg	2026-04-18 09:47:14.615	2026-04-18 09:47:14.615
cmo2pdmkd000i90oh5df8yzox	SICHUAN MEDNIY KOLCA Ø 130 x 10 x 2		{sichuan}	copper_rings	/img/products/1776417943930-bcyaii720ou.jpg	2026-04-17 09:25:44.7	2026-04-17 09:25:44.7
cmo2pkvbp000j90ohk9p8tdv5	SICHUAN ALYUMIN KOLCA Ø 139 x 134 x 4		{sichuan}	copper_rings	/img/products/1776418280640-ctz76ut3wzd.jpg	2026-04-17 09:31:22.645	2026-04-17 09:31:22.645
cmo2ov1ka000f90ohdo6tuvod	TIANCHEN ALYUMIN KOLCA   Ø 124 x 117 x 2 		{tianchen}	copper_rings	/img/products/1776417065048-xtqny3gfrwh.jpg	2026-04-17 09:11:17.674	2026-04-17 09:16:35.947
cmo2qb7ee000p90oh01opk2s4	SICHUAN ALYUMIN KOLCA Ø 100 x 93 x 4.5		{sichuan}	copper_rings	/img/products/1776419505698-jvr8hvkdc2.jpg	2026-04-17 09:51:51.35	2026-04-17 09:51:51.35
cmo2qilyk000q90ohp1khfn4f	SICHUAN ALYUMIN KOLCA Ø 95 x 85 x 2		{sichuan}	copper_rings	/img/products/1776419855743-ub4ym7aokak.jpg	2026-04-17 09:57:36.812	2026-04-17 09:57:36.812
cmo2qmd7f000r90ohj9vc0ua7	SICHUAN ALYUMIN KOLCA Ø 80 x 73 x 4		{sichuan}	copper_rings	/img/products/1776420031068-p42bs8e1o2o.jpg	2026-04-17 10:00:32.091	2026-04-17 10:00:32.091
cmo2qotum000s90oh6r17lgwh	SICHUAN ALYUMIN KOLCA Ø 70 x 64 x 4		{sichuan}	copper_rings	/img/products/1776420144118-c32iq1xx54s.jpg	2026-04-17 10:02:26.974	2026-04-17 10:02:26.974
cmo2qq8d3000t90ohozqj23x3	SICHUAN ALYUMIN KOLCA Ø 66 x 59 x 4.3		{sichuan}	copper_rings	/img/products/1776420204922-1tav6jr25vr.jpg	2026-04-17 10:03:32.439	2026-04-17 10:03:32.439
cmo3xnmqi000u90ohdkf6j362	165 Ø KWANGSHIN SALNIK REZINKA		{kwangshin}	seal_rubbers	/img/products/1776492311145-z2rv35a29g.jpg	2026-04-18 06:05:14.586	2026-04-18 06:05:14.586
cmo3xnzuu000v90ohnh5niw5i	140Ø KWANGSHIN SALNIK REZINKA		{kwangshin}	seal_rubbers	/img/products/1776492330142-ge9fin3fwne.jpg	2026-04-18 06:05:31.59	2026-04-18 06:05:31.59
cmo3xoahc000w90ohh8hgvyys	120 Ø KWANGSHIN SALNIK REZINKA		{kwangshin}	seal_rubbers	/img/products/1776492344103-hwszbl95dxf.jpg	2026-04-18 06:05:45.36	2026-04-18 06:05:45.36
cmo3xokqm000x90ohxpthdhad	110 Ø KWANGSHIN SALNIK REZINKA		{kwangshin}	seal_rubbers	/img/products/1776492357334-0y8nrvyhu4sc.jpg	2026-04-18 06:05:58.654	2026-04-18 06:05:58.654
cmo3xowp1000y90ohtzikc9j1	93 Ø KWANGSHIN SALNIK REZINKA		{kwangshin}	seal_rubbers	/img/products/1776492372674-4xjctrg3fbc.jpg	2026-04-18 06:06:14.149	2026-04-18 06:06:14.149
cmo3xugjr001190ohn907uxwf	30 XIL RAZMERDAGI SALNIKLAR		{kwangshin}	seal_rubbers	/img/products/1776492627441-bczmkorr61k.jpg	2026-04-18 06:10:33.159	2026-04-18 06:10:33.159
cmo3xre62001090oh34x9xt76	KWANGSHIN PISTOLET SALNIK		{kwangshin}	seal_rubbers	/img/products/1776492488944-pnncli513u7.jpg	2026-04-18 06:08:10.106	2026-04-18 06:08:10.106
cmo3xp850000z90ohhbryksp9	88 Ø KWANGSHIN SALNIK REZINKA		{kwangshin}	seal_rubbers	/img/products/1776492387616-ddfcabxj3v.jpg	2026-04-18 06:06:28.98	2026-04-18 06:06:28.98
cmo2pn7ds000k90ohl16py2kv	 SICHUAN ALYUMIN KOLCA Ø 135 x 125 x 2		{sichuan}	copper_rings	/img/products/1776418389165-k6emrrgcs58.jpg	2026-04-17 09:33:11.584	2026-04-17 09:33:11.584
cmo2ps5vr000l90ohq68bsew2	SICHUAN ALYUMIN KOLCA Ø 109 x 103 x 4.5		{sichuan}	copper_rings	/img/products/1776418618377-x1yyxaszuy.jpg	2026-04-17 09:37:02.919	2026-04-17 09:37:02.919
cmo2pv9od000m90ohaesjgsg9	SICHUAN ALYUMIN KOLCA Ø 115 x 107 x 5		{sichuan}	copper_rings	/img/products/1776418765706-bymca20gywh.jpg	2026-04-17 09:39:27.804	2026-04-17 09:39:27.804
cmo2pykft000n90oh5brnq202	TIANCHEN ALYUMIN KOLCA Ø 105 x 98 x 4		{tianchen}	copper_rings	/img/products/1776418920649-y90a310hjoo.jpg	2026-04-17 09:42:01.721	2026-04-17 09:42:01.721
cmo44z9gq001d90oh3mtghu0u	KWANGSHIN OBRATNIY KLAPON REMKOMPLEKT NRV-025A		{kwangshin}	repair_kits	/img/products/1776504596732-6wust7kvo1.jpg	2026-04-18 09:30:14.57	2026-04-18 09:30:14.57
cmo450mrr001e90ohax7m9fyb	KWANGSHIN OBRATNIY KLAPON REMKOMPLEKT NRV-020A NRV-015A		{kwangshin}	repair_kits	/img/products/1776504671461-sq1atanewtq.jpg	2026-04-18 09:31:18.471	2026-04-18 09:31:18.471
cmo4528m4001f90oh77897sb8	KWANGSHIN OBRATNIY KLAPON REMKOMPLEKT YANGI MODEL NRV-020A NRV-015A		{kwangshin}	repair_kits	/img/products/1776504752572-o4tcatkayg.jpg	2026-04-18 09:32:33.436	2026-04-18 09:32:33.436
cmo45izjk001i90ohyt7pmixf	KWANGSHIN 203 KRAN REMKOPLEKT XITOY		{kwangshin}	repair_kits	/img/products/1776505528735-3eqbymfh1uv.jpg	2026-04-18 09:45:34.832	2026-04-18 09:45:34.832
cmo455sb3001g90ohr9ude64d	KWANGSHIN 704 KRAN REMKOPLEKT 		{kwangshin}	repair_kits	/img/products/1776505441429-6p0278k2ebb.jpg	2026-04-18 09:35:18.927	2026-04-18 09:44:02.541
cmo45lcar001k90oh7sup53rz	KWANGSHIN 3 HODOVOY KRAN REMKOPLEKT		{kwangshin}	repair_kits	/img/products/1776505643974-k3v6zkiufkd.jpg	2026-04-18 09:47:24.675	2026-04-18 09:47:24.675
cmo45liaa001l90ohd9hl5epl	KWANGSHIN 3 HODOVOY KRAN REMKOPLEKT		{kwangshin}	repair_kits	/img/products/1776505651647-o29oldm85ga.jpg	2026-04-18 09:47:32.434	2026-04-18 09:47:32.434
cmo3y38ku001490ohpf2e2711	TEMPERATURNIY MANOMETR 100 °C/°F		{kwangshin,sichuan,farnova,graf,aspro,tianchen,tianyi}	manometers	/img/products/1776493041836-zrf3csdm65j.jpg	2026-04-18 06:17:22.734	2026-04-21 07:59:13.25
cmo3y52os001590ohesouuacr	MANOMETR DAVLENIYA KOTTA 40 MPA		{kwangshin,sichuan,farnova,aspro,tianchen,tianyi,graf}	manometers	/img/products/1776493125488-p0xex557jpb.jpg	2026-04-18 06:18:48.412	2026-04-21 07:59:20.242
cmo44mp2m001790oh4dahsgp3	TEMPERATURNIY MANOMETR 200 °C/°F		{sichuan,kwangshin,farnova,graf,aspro,tianchen,tianyi}	manometers	/img/products/1776504013465-kfpgemtzgnm.jpg	2026-04-18 09:20:28.27	2026-04-21 07:59:36.002
cmo45ozcs001m90ohdym7voju	KWANGSHIN ZRIVATELNIY MUFTA REMKOPLEKT		{kwangshin}	repair_kits	/img/products/1776505803572-m0nqtxw9e3n.jpg	2026-04-18 09:50:14.524	2026-04-18 09:50:14.524
cmo45rdbh001n90ohbjvh8vu7	KWANGSHIN 90 Ø KONCENTRIK KLAPON ICHIDAGI REMKOPLEKT		{kwangshin}	repair_kits	/img/products/1776505920889-388etgnxtni.jpg	2026-04-18 09:52:05.933	2026-04-18 09:52:05.933
cmo1861wf000i8sl8e9j17guu	105 Ø TIANCHEN KIRISH KLAPONI		{tianchen}	valves_in_out	/img/products/1776328565275-4jt5t30k0b5.jpg	2026-04-16 08:36:11.679	2026-04-16 08:36:11.679
cmo2pb2sw000h90ohkzhpf36z	SICHUAN MEDNIY KOLCA Ø 130 x 10 x 2		{sichuan}	copper_rings	/img/products/1776417805027-348widf76z6.jpg	2026-04-17 09:23:45.776	2026-04-17 09:23:45.776
cmo45sv7p001o90oh1k15asec	KWANGSHIN KARA KIT REMKOPLEKT (SALNIY BLOK)		{kwangshin}	repair_kits	/img/products/1776506000722-d2o90nrvezj.jpg	2026-04-18 09:53:15.78	2026-04-18 09:53:22.014
cmo45uwqh001p90ohy4gbd9v5	KWANGSHIN 90 Ø KONCENTRIK KLAPON MEDNIY KOLCA REMKOMPLEKT		{kwangshin}	repair_kits	/img/products/1776506090253-bszrvm9x7s6.jpg	2026-04-18 09:54:51.065	2026-04-18 09:54:51.065
cmo461k1j001q90ohbbqfv3dc	KWANGSHIN 706 KRAN REMKOPLEKT		{kwangshin}	repair_kits	/img/products/1776506398447-754arftdnko.jpg	2026-04-18 10:00:01.207	2026-04-18 10:00:01.207
cmo6syrxm001r90oh01leogkq	KWANGSHIN KOLONKA AVARIYNIY KRAN 1/2 TRUBA RAZMER		{kwangshin}	cranes	/img/products/1776665821289-n7c19hm0nf.jpg	2026-04-20 06:17:14.986	2026-04-20 06:17:14.986
cmo6t3yoq001s90ohtqs5czy7	KWANGSHIN 3 HODOVOY KRAN TALSCOK		{kwangshin}	cranes	/img/products/1776666068130-5467bfi7naj.jpg	2026-04-20 06:21:17.018	2026-04-20 06:21:17.018
cmo6t4pc3001t90oh2t8r99ki	KWANGSHIN 3 HODOVOY KRAN HARDLOK		{kwangshin}	cranes	/img/products/1776666110187-zjbei4tyo8.jpg	2026-04-20 06:21:51.555	2026-04-20 06:21:51.555
cmo6t5i69001u90ohylsm47au	KWANGSHIN 3 HODOVOY KRAN CL-LOK		{kwangshin}	cranes	/img/products/1776666142769-dzghk2gxhas.jpg	2026-04-20 06:22:28.929	2026-04-20 06:22:28.929
cmo6t7093001v90oh7t73q5gs	KWANGSHIN 3 HODOVOY KRAN SEAT PEEK		{kwangshin}	cranes	/img/products/1776666192469-wakusb5ap7a.jpg	2026-04-20 06:23:39.015	2026-04-20 06:23:39.015
cmo6t8u0m001w90ohi9fubhf1	KWANGSHIN SBROSNOY KRAN 		{kwangshin}	cranes	/img/products/1776666298678-9sgaqzaxg7.jpg	2026-04-20 06:25:04.246	2026-04-20 06:25:04.246
cmo6tbzxu001x90ohpqg2c9qi	KWANGSHIN 704 KRAN KOLONKAGA		{kwangshin}	cranes	/img/products/1776666394977-vuzt18jtx4d.jpg	2026-04-20 06:27:31.89	2026-04-20 06:27:31.89
cmo6tf9h6001y90ohpjdtqhfg	KWANGSHIN 704 KRAN RUCHKASI		{kwangshin}	cranes	/img/products/1776666600936-xxcv3tcmuts.jpg	2026-04-20 06:30:04.218	2026-04-20 06:30:04.218
cmo6um2c4001z90ohsk8nj1hg	TIANYI MASLENIY FILTR		{tianyi}	filters	/img/products/1776668585473-r1n55pzfq9p.jpg	2026-04-20 07:03:21.172	2026-04-20 07:03:21.172
cmo6umwqn002090oh7vhrpqea	FORNOVO MASLENIY FILTR		{farnova}	filters	/img/products/1776668639742-m4nwvbpdzo.jpg	2026-04-20 07:04:00.575	2026-04-20 07:04:00.575
cmo76k8e2002e90ohazarzikq	KWANGSHIN Ø 140 KLAPON PLASTINA		{kwangshin}	plates	/img/products/1776688669837-aqb42772r9n.jpg	2026-04-20 12:37:51.098	2026-04-20 12:37:51.098
cmo76q075002g90ohp1yxxctb	KWANGSHIN Ø 110 KLAPON PLASTINA		{kwangshin}	plates	/img/products/1776688936429-2ha6axz4056.jpg	2026-04-20 12:42:20.417	2026-04-20 12:42:20.417
cmo76p5el002f90ohltv6gozh	KWANGSHIN Ø 120 KLAPON PLASTINA		{kwangshin}	plates	/img/products/1776688858975-a3486510af.jpg	2026-04-20 12:41:40.509	2026-04-20 12:41:40.509
cmo76r6cx002h90oh7w426asw	 KWANGSHIN Ø 93 KLAPON PLASTINA		{kwangshin}	plates	/img/products/1776688990721-5wrjhv30svx.jpg	2026-04-20 12:43:15.057	2026-04-20 12:43:15.057
cmo76sdqj002i90ohqt4tiv6i	KWANGSHIN Ø 88 KLAPON PLASTINA		{kwangshin}	plates	/img/products/1776689050437-rhklgckee9j.jpg	2026-04-20 12:44:11.275	2026-04-20 12:44:11.275
cmo76hokn002d90ohdhxdz7c9	KWANGSHIN Ø 165  ITALYANSKIY KLAPON PLASTINA (147/4 mm)		{kwangshin}	plates	/img/products/1776688547146-khjxc6cwtbr.jpg	2026-04-20 12:35:52.103	2026-04-20 12:35:52.103
cmo7664wr002c90oh23ikp35x	KWANGSHIN Ø 165 AMERIKANSKIY KLAPON PLASTINA		{kwangshin}	plates	/img/products/1776687999363-oszmpom0cr.jpg	2026-04-20 12:26:53.403	2026-04-20 12:26:53.403
cmo764jnn002b90ohebjdtsu2	KWANGSHIN Ø 165 KLAPON PLASTINA 		{kwangshin}	plates	/img/products/1776687910731-818waplqg7s.jpg	2026-04-20 12:25:39.203	2026-04-20 12:25:39.203
cmo75y99o002a90ohior4ruzl	KWANGSHIN Ø 165 PURJINA PLASTINA		{kwangshin}	plates	/img/products/1776687632177-t820lfuqyn.jpg	2026-04-20 12:20:45.804	2026-04-20 12:20:45.804
cmo75pmzj002990ohszb2volo	SICHUAN KARTOR FILTR		{sichuan}	filters	/img/products/1776687243083-a0js2u7wa5u.jpg	2026-04-20 12:14:03.679	2026-04-20 12:14:03.679
cmo75opob002890ohm6rymapb	TIANCHEN M MODEL ICHKI FILTR		{tianchen}	filters	/img/products/1776687199584-vdw180pdr7o.jpg	2026-04-20 12:13:20.507	2026-04-20 12:13:20.507
cmo75m653002790ohuyv05407	KWANGSHIN REGULYATOR KIRISH FILTR MIKRONLI Ø 100 		{kwangshin}	filters	/img/products/1776687080589-h4iw7kbue14.jpg	2026-04-20 12:11:21.879	2026-04-20 12:11:21.879
cmo75jg0t002690ohh43y393t	KWANGSHIN KIRISH FILTR		{kwangshin}	filters	/img/products/1776686937699-bhiypizysvf.jpg	2026-04-20 12:09:14.717	2026-04-20 12:09:14.717
cmo75i4i9002590oh2wcfhjlv	KWANGSHIN SEPARATOR FILTR		{kwangshin}	filters	/img/products/1776686888989-hbyh1dagtxe.jpg	2026-04-20 12:08:13.137	2026-04-20 12:08:13.137
cmo75frpb002490ohtjfw954e	KWANGSHIN MASLENIY FILTR		{kwangshin}	filters	/img/products/1776686782081-yyx6mxx6nk.jpg	2026-04-20 12:06:23.231	2026-04-20 12:06:23.231
cmo75f9eb002390ohs6v544oi	KWANGSHIN MASLENIY FILTR		{kwangshin}	filters	/img/products/1776686732380-l7u5xab80o8.jpg	2026-04-20 12:05:59.507	2026-04-20 12:05:59.507
cmo6uq6bv002290ohjyy53maf	KWANGSHIN KOMPRESSOR FINAL FILTR 4/10		{kwangshin}	filters	/img/products/1776668788972-1teacktl8db.jpg	2026-04-20 07:06:32.971	2026-04-20 07:06:32.971
cmo6uo4z1002190ohcpngm9j7	TIANCHEN ICHKI FILTR		{tianchen}	filters	/img/products/1776668690996-7ntrq6qsdfo.jpg	2026-04-20 07:04:57.901	2026-04-20 07:04:57.901
cmo2mld9p000d90oh60b6x3r7	88 Ø KWANGSHIN MEDNIY KOLCA		{kwangshin}	copper_rings	/img/products/1776413265648-ns4horyb82i.jpg	2026-04-17 08:07:47.053	2026-04-17 08:07:47.053
cmo44pkcj001990ohwfoznndc	TEMPERATURNIY MANOMETR 200 °C/°F		{sichuan,kwangshin,farnova,graf,aspro,tianchen,tianyi}	manometers	/img/products/1776504154124-29tyvwhysbe.jpg	2026-04-18 09:22:42.115	2026-04-21 07:59:51.329
cmo44taa9001b90ohy3d9xtct	MANOMETR DAVLENIYA KOTTA 0 - 4 MPA		{tianchen,kwangshin,sichuan,farnova,graf,aspro,tianyi}	manometers	/img/products/1776504327050-ihxk3w5wiuk.jpg	2026-04-18 09:25:35.697	2026-04-21 08:00:06.048
cmo44ucob001c90ohgkiu0vmn	MANOMETR DAVLENIYA KOTTA 0 - 10 MPA		{tianchen,kwangshin,sichuan,farnova,aspro,tianyi,graf}	manometers	/img/products/1776504384141-o788fosxp2.jpg	2026-04-18 09:26:25.451	2026-04-21 08:00:12.862
cmo8bl7dk00008qmsosco9ok8	ASPRO KLAPAN KIRISH Ø 92 x 65  		{aspro}	valves_in_out	/img/products/1776757571344-ld54nxf5c1a.jpg	2026-04-21 07:46:20.696	2026-04-21 07:46:20.696
cmo8blzhj00018qmsb36ebx98	ASPRO KLAPAN CHIQISH Ø 92 x 65		{aspro}	valves_in_out	/img/products/1776757615647-9bhwcjszbqk.jpg	2026-04-21 07:46:57.126	2026-04-21 07:46:57.126
cmo8bmqgs00028qmsamghwghn	ASPRO KLAPAN 		{aspro}	valves_in_out	/img/products/1776757650947-12n3b17g92v9.jpg	2026-04-21 07:47:32.092	2026-04-21 07:47:32.092
cmo8bnyhs00038qmspji1ty7o	ASPRO KLAPAN		{aspro}	valves_in_out	/img/products/1776757706580-vai4bytsdx.jpg	2026-04-21 07:48:29.152	2026-04-21 07:48:29.152
cmo8boeqi00048qmsn9mt2w9s	ASPRO KLAPAN		{aspro}	valves_in_out	/img/products/1776757728861-z0n7ft2aa9d.jpg	2026-04-21 07:48:50.202	2026-04-21 07:48:50.202
cmo2lyz7n000290ohgbeoxpkk	TIANCHEN OBRATNIY KLAPON L22		{tianchen,sichuan}	valves_check	/img/products/1776412227890-qb6srau7qxp.jpg	2026-04-17 07:50:22.403	2026-04-21 07:49:48.696
cmo8cs93l000l8qms5wjzjvsn	KRAN Ø 25 TRUBAGA		{kwangshin,sichuan,farnova,graf,aspro,tianchen,tianyi}	cranes	/img/products/1776759586130-zeu8ksjf3li.jpg	2026-04-21 08:19:49.137	2026-04-21 08:20:04.37
cmo8bwd2x00078qmsgdj1bch8	 ASPRO MEDNIY KOLCA Ø 74 x 66 x 2		{aspro}	copper_rings	/img/products/1776758098077-i3yzuo1o0oi.jpg	2026-04-21 07:55:01.305	2026-04-21 07:55:01.305
cmo8bsi9300058qmsz3eu1pdz	ASPRO MEDNIY KOLCA Ø 91 x 83.5 x 2		{aspro}	copper_rings	/img/products/1776757917957-8moi8o2187c.jpg	2026-04-21 07:52:01.383	2026-04-21 07:55:15.598
cmo8bu3e300068qmsiuvo8hkw	 ASPRO MEDNIY KOLCA Ø 79.9 x 87.8 x 1.5		{aspro}	copper_rings	/img/products/1776757977541-olvwzvypwxh.jpg	2026-04-21 07:53:15.435	2026-04-21 07:55:29.351
cmo8by99900088qmsjugrhbyx	ASPRO MEDNIY KOLCA Ø 74 x 56 x 2		{aspro}	copper_rings	/img/products/1776758188272-xx1w0ifaz1l.jpg	2026-04-21 07:56:29.661	2026-04-21 07:56:29.661
cmo8bzc7v00098qmsdw93f5v2	ASPRO MEDNIY KOLCA Ø 50 x 41 x 2		{aspro}	copper_rings	/img/products/1776758220310-dbt4okg81bw.jpg	2026-04-21 07:57:20.155	2026-04-21 07:57:20.155
cmo8c0glu000a8qms5y8ql0c8	ASPRO MEDNIY KOLCA Ø 45 x 34 x 2		{aspro}	copper_rings	/img/products/1776758251660-azaqh2hyabr.jpg	2026-04-21 07:58:12.498	2026-04-21 07:58:12.498
cmo3xxt1d001290ohi5j209yc	MANOMETR DAVLENIYA 40 MPA		{kwangshin,sichuan,farnova,graf,aspro,tianchen,tianyi}	manometers	/img/products/1776492781876-t637hjqgzde.jpg	2026-04-18 06:13:09.313	2026-04-21 07:58:55.553
cmo3xyufi001390ohyaejfuw6	MANOMETR DAVLENIYA 10 MPA		{kwangshin,sichuan,farnova,graf,aspro,tianchen,tianyi}	manometers	/img/products/1776492836456-mek2zrb3yjk.jpg	2026-04-18 06:13:57.774	2026-04-21 07:59:04.389
cmo44l6po001690oh6d4bqwiv	TEMPERATURNIY MANOMETR 100 °C/°F		{sichuan,kwangshin,farnova,aspro,tianchen,tianyi,graf}	manometers	/img/products/1776503953253-6d4z1w9p4wh.jpg	2026-04-18 09:19:17.82	2026-04-21 07:59:28.118
cmo44oo6y001890ohzu9ipmh1	TEMPERATURNIY MANOMETR 100 °C/°F		{sichuan,farnova,graf,kwangshin,tianyi,tianchen,aspro}	manometers	/img/products/1776504118092-zk6qbgbke2b.jpg	2026-04-18 09:22:00.442	2026-04-21 07:59:44.847
cmo44s99q001a90ohhm7ritj0	MANOMETR DAVLENIYA KOTTA 0 - 1.6 MPA		{tianchen,kwangshin,sichuan,farnova,aspro,tianyi,graf}	manometers	/img/products/1776504281585-0lnk408s848.jpg	2026-04-18 09:24:47.726	2026-04-21 07:59:58.251
cmo8c72e8000b8qmsw55zan2o	KOMPRESSOR KIRSHIGA KRAN Ø 80/16		{kwangshin,sichuan,farnova,graf,aspro,tianchen,tianyi}	cranes	/img/products/1776758599473-za4wncws0m9.jpg	2026-04-21 08:03:20.672	2026-04-21 08:03:20.672
cmo8cb5n1000d8qmsrgchk99v	KOMPRESSOR KIRSHIGA KRAN Ø 100/16		{kwangshin,sichuan,farnova,graf,aspro,tianchen,tianyi}	cranes	/img/products/1776758787986-cjd8c39fnca.jpg	2026-04-21 08:06:31.501	2026-04-21 08:07:07.425
cmo8cm1k4000f8qmsz4ahd3dv	KRAN Ø 10 TRUBAGA		{kwangshin,sichuan,farnova,graf,aspro,tianchen,tianyi}	cranes	/img/products/1776759295251-khagieons8.jpg	2026-04-21 08:14:59.427	2026-04-21 08:14:59.427
cmo8cngkx000g8qms2rs6owsk	KRAN Ø 12 TRUBAGA		{kwangshin,sichuan,farnova,graf,aspro,tianchen,tianyi}	cranes	/img/products/1776759363378-pae1d01sd7q.jpg	2026-04-21 08:16:05.553	2026-04-21 08:16:05.553
cmo8cnyt6000h8qmsqi700l3l	KRAN Ø 14 TRUBAGA		{kwangshin,sichuan,farnova,graf,aspro,tianchen,tianyi}	cranes	/img/products/1776759387144-gjba5k79zck.jpg	2026-04-21 08:16:29.178	2026-04-21 08:16:29.178
cmo8cph0s000i8qmsncucrcj4	KRAN Ø 16 TRUBAGA		{kwangshin,sichuan,farnova,graf,aspro,tianchen,tianyi}	cranes	/img/products/1776759456562-ijskza5thm.jpg	2026-04-21 08:17:39.436	2026-04-21 08:17:49.242
cmo8cyhtc000r8qms1940w26p	TIANCHEN VA SICHUAN MASLENIY TASHQI FILTR		{sichuan,tianchen}	filters	/img/products/1776759866662-1te3su1rich.jpg	2026-04-21 08:24:40.368	2026-04-21 08:24:40.368
cmo8c9yh0000c8qmsken10i28	KOMPRESSOR KIRSHIGA KRAN Ø 80/25		{kwangshin,sichuan,farnova,graf,aspro,tianchen,tianyi}	cranes	/img/products/1776759997486-oxmo5tagb3o.jpg	2026-04-21 08:05:35.556	2026-04-21 08:26:39.315
cmo8cbr0d000e8qms9pwu4u8i	KOMPRESSOR KIRSHIGA KRAN Ø 100/25		{kwangshin,sichuan,farnova,graf,aspro,tianchen,tianyi}	cranes	/img/products/1776760009739-2i6092twb0a.jpg	2026-04-21 08:06:59.197	2026-04-21 08:26:51.311
cmo8cqwgk000j8qmspw7qzgan	 KRAN Ø 20 TRUBAGA		{kwangshin,sichuan,farnova,graf,aspro,tianchen,tianyi}	cranes	/img/products/1776760027148-on5ezgybzg9.jpg	2026-04-21 08:18:46.099	2026-04-21 08:27:08.628
cmob2obbm000k96pdd3u353vz	ASPRO PLASTINA Ø 60/20		{aspro}	plates	/img/products/1776924005681-4lkd3rhutul.jpg	2026-04-23 06:00:07.762	2026-04-23 06:00:07.762
cmo8ct13e000m8qmswl37t4rl	 KRAN Ø 28 TRUBAGA		{kwangshin,sichuan,farnova,graf,aspro,tianchen,tianyi}	cranes	/img/products/1776760064678-65syqfzsusr.jpg	2026-04-21 08:20:25.418	2026-04-21 08:27:47.525
cmo8culfd000n8qmska1l00rc	 KRAN Ø 32 TRUBAGA		{kwangshin,sichuan,farnova,graf,aspro,tianchen,tianyi}	cranes	/img/products/1776759694893-iqnahiflmw.jpg	2026-04-21 08:21:38.425	2026-04-21 08:27:58.105
cmo8cv25w000o8qms4rix1lex	 KRAN Ø 36 TRUBAGA		{kwangshin,sichuan,farnova,graf,tianyi,tianchen,aspro}	cranes	/img/products/1776760280765-fz68voerciv.jpg	2026-04-21 08:22:00.116	2026-04-21 08:31:21.7
cmo8cvr43000q8qms23oe34v9	KRAN Ø 42 TRUBAGA		{kwangshin,sichuan,farnova,graf,aspro,tianchen,tianyi}	cranes	/img/products/1776760231060-c5i24tktfhm.jpg	2026-04-21 08:22:32.451	2026-04-21 08:30:32.054
cmob2osd4000l96pd1iu4ua9h	 ASPRO PLASTINA Ø 40/10		{aspro}	plates	/img/products/1776924027590-bxr6f52ctq9.jpg	2026-04-23 06:00:29.848	2026-04-23 06:00:29.848
cmo8crhxk000k8qms4l43bfmc	 KRAN Ø 22 TRUBAGA		{kwangshin,sichuan,farnova,graf,aspro,tianchen,tianyi}	cranes	/img/products/1776760184396-d6x0ki0jvlp.jpg	2026-04-21 08:19:13.928	2026-04-21 08:29:47.269
cmo8cvek1000p8qmsu1iy7s4l	 KRAN Ø 40 TRUBAGA		{kwangshin,sichuan,farnova,aspro,graf,tianchen,tianyi}	cranes	/img/products/1776760261638-k0vh0ysxnk.jpg	2026-04-21 08:22:16.177	2026-04-21 08:31:02.542
cmo8dj2h9000s8qmsyv3ncley	DATCHIK DAVLENIYA ELEKTRONNIY 0 - 1.6 MPA		{kwangshin,sichuan,farnova,graf,aspro,tianchen,tianyi}	pressure_sensors	/img/products/1776760837146-o9p9kvmnhqa.jpg	2026-04-21 08:40:40.269	2026-04-21 08:40:40.269
cmo8djw0c000t8qmsrdw75fxz	DATCHIK DAVLENIYA ELEKTRONNIY 0 - 10 MPA		{kwangshin,sichuan,farnova,graf,aspro,tianchen,tianyi}	pressure_sensors	/img/products/1776760866954-8l1guk4rb6a.jpg	2026-04-21 08:41:18.54	2026-04-21 08:41:18.54
cmo8dkn2j000u8qmsda683hlb	DATCHIK DAVLENIYA ELEKTRONNIY 0 - 30 MPA		{kwangshin,sichuan,farnova,graf,aspro,tianchen,tianyi}	pressure_sensors	/img/products/1776760905910-4gg1xaul237.jpg	2026-04-21 08:41:53.611	2026-04-21 08:41:53.611
cmo8dlsgo000v8qmsv1lmx3iy	DATCHIK DAVLENIYA ELEKTRONNIY 0 - 2.5 MPA		{kwangshin,sichuan,farnova,graf,aspro,tianchen,tianyi}	pressure_sensors	/img/products/1776760950133-k9scbgq3lzs.jpg	2026-04-21 08:42:47.256	2026-04-21 08:42:47.256
cmo8dmjup000w8qmstvp7q8zg	 DATCHIK DAVLENIYA ELEKTRONNIY 0 - 6 MPA		{kwangshin,sichuan,farnova,graf,aspro,tianchen,tianyi}	pressure_sensors	/img/products/1776760983837-nodjb1xw65e.jpg	2026-04-21 08:43:22.753	2026-04-21 08:43:22.753
cmo8dnh42000x8qms4a2adfiu	DATCHIK DAVLENIYA ELEKTRONNIY 0 - 40 MPA		{kwangshin,sichuan,farnova,graf,aspro,tianchen,tianyi}	pressure_sensors	/img/products/1776761044791-cno2wlgb55.jpg	2026-04-21 08:44:05.858	2026-04-21 08:44:05.858
cmo8dol67000y8qmsmuw843k2	DATCHIK DAVLENIYA ELEKTRONNIY 0 - 25MPA		{kwangshin,sichuan,farnova,graf,aspro,tianchen,tianyi}	pressure_sensors	/img/products/1776761079078-r8euzwp03a.jpg	2026-04-21 08:44:57.775	2026-04-21 08:44:57.775
cmo8dpmo9000z8qmsy7etwvnx	DATCHIK DAVLENIYA ELEKTRONNIY 0 - 4MPA		{kwangshin,sichuan,farnova,graf,aspro,tianchen,tianyi}	pressure_sensors	/img/products/1776761141192-26rzosx3zq1.jpg	2026-04-21 08:45:46.377	2026-04-21 08:45:46.377
cmo8dqeb900108qmsyj6iejny	 DATCHIK DAVLENIYA ELEKTRONNIY 0 - 16MPA		{kwangshin,sichuan,farnova,aspro,tianchen,tianyi,graf}	pressure_sensors	/img/products/1776761175009-4ya1futljoo.jpg	2026-04-21 08:46:22.197	2026-04-21 08:46:22.197
cmo8dr8wx00118qmsslco11sz	DATCHIK DAVLENIYA ELEKTRONNIY 0 - 35MPA		{kwangshin,sichuan,farnova,graf,aspro,tianchen,tianyi}	pressure_sensors	/img/products/1776761219697-46q58dk16u8.jpg	2026-04-21 08:47:01.857	2026-04-21 08:47:01.857
cmo9y9u8p000096pdhufrf1ri	DATCHIK DAVLENIYA BOSIM UCHUN 0 - 1.0 MPA		{kwangshin,sichuan,farnova,graf,aspro,tianchen,tianyi}	pressure_sensors	/img/products/1776856134813-v6dpomsm849.jpg	2026-04-22 11:09:07.798	2026-04-22 11:09:07.798
cmo9yed93000196pdraeafkst	SOLENOID MAGNITNIY PUSKATEL AKTIVATORGA 4М310-08		{sichuan,kwangshin,farnova,graf,aspro,tianchen,tianyi}	magnetic_starters	/img/products/1776856356489-ubrkm7nzwuk.jpg	2026-04-22 11:12:39.063	2026-04-22 11:12:39.063
cmo9yfq5n000296pdu5197ktn	SOLENOID MAGNITNIY PUSKATEL AKTIVATORGA 4М310-10		{kwangshin,sichuan,farnova,graf,aspro,tianchen,tianyi}	magnetic_starters	/img/products/1776856418360-7i5yffcc0h.jpg	2026-04-22 11:13:42.443	2026-04-22 11:13:42.443
cmo9yh5ne000396pdohon6vjb	SOLENOID MAGNITNIY PUSKATEL AKTIVATORGA 4М210-08		{kwangshin,sichuan,farnova,graf,aspro,tianchen,tianyi}	magnetic_starters	/img/products/1776856486950-0i62j6d70g56.jpg	2026-04-22 11:14:49.178	2026-04-22 11:14:49.178
cmo9ymqrd000496pd5ywgks46	TRANSMITTER 0 - 25 bar KICHKINA REZVA		{kwangshin,sichuan,farnova,graf,aspro,tianchen,tianyi}	pressure_sensors	/img/products/1776856761714-7guh39afyw8.jpg	2026-04-22 11:19:09.817	2026-04-22 11:19:25.186
cmo9yordt000596pdu7w90m0v	 TRANSMITTER 0 - 250 bar KICHKINA REZVA		{kwangshin,sichuan,farnova,graf,aspro,tianchen,tianyi}	pressure_sensors	/img/products/1776856828693-rqti2whjnbo.jpg	2026-04-22 11:20:43.937	2026-04-22 11:20:43.937
cmo9ypr9j000696pd2rqfaqf9	TRANSMITTER 0 - 100 bar KICHKINA REZVA		{kwangshin,sichuan,farnova,graf,aspro,tianchen,tianyi}	pressure_sensors	/img/products/1776856888144-224fbi4rqv9.jpg	2026-04-22 11:21:30.439	2026-04-22 11:21:30.439
cmo9yqlsf000796pd6nrefp62	TRANSMITTER 0 - 10 bar KICHKINA REZVA		{kwangshin,sichuan,farnova,graf,aspro,tianchen,tianyi}	pressure_sensors	/img/products/1776856927802-t2p9b1q1zpc.jpg	2026-04-22 11:22:09.999	2026-04-22 11:22:09.999
cmo9yrtyk000896pdsj6a80no	 TRANSMITTER 0 - 400 bar KICHKINA REZVA		{kwangshin,sichuan,farnova,graf,aspro,tianchen,tianyi}	pressure_sensors	/img/products/1776856982977-37wghf6ur3.jpg	2026-04-22 11:23:07.244	2026-04-22 11:23:07.244
cmo9ytggf000996pdmuv8lyza	TRANSMITTER 0 - 1 MPA KOTTA REZVA		{kwangshin,sichuan,graf,farnova,aspro,tianchen,tianyi}	pressure_sensors	/img/products/1776857061929-1wnzrqml76r.jpg	2026-04-22 11:24:23.055	2026-04-22 11:24:23.055
cmo9yupdq000a96pdmpvatjh7	TRANSMITTER 0 - 40 MPA KOTTA REZVA		{kwangshin,sichuan,farnova,graf,aspro,tianchen,tianyi}	pressure_sensors	/img/products/1776857118520-9ojy6qjul98.jpg	2026-04-22 11:25:21.277	2026-04-22 11:25:21.277
cmo9ywhx0000b96pd9xiefxll	TRANSMITTER BEKO-CJ-40/0,5 KOTTA REZVA		{kwangshin,sichuan,graf,farnova,aspro,tianchen,tianyi}	pressure_sensors	/img/products/1776857202692-bq2jdlxwsj9.jpg	2026-04-22 11:26:44.916	2026-04-22 11:26:44.916
cmo9yxjdw000c96pdj29o257f	TRANSMITTER 0 - 1.6 MPA KOTTA REZVA		{kwangshin,sichuan,farnova,graf,tianyi,tianchen,aspro}	pressure_sensors	/img/products/1776857248187-bf2kyefr068.jpg	2026-04-22 11:27:33.476	2026-04-22 11:27:33.476
cmo9z0otr000d96pdo0rc7efq	GRAF PLASTINA Ø 130/100		{graf}	plates	/img/products/1776857395015-ebbt96dx3si.jpg	2026-04-22 11:30:00.495	2026-04-22 11:30:00.495
cmo9z1nc2000e96pd39rjjqbr	GRAF PLASTINA Ø 95/40		{graf}	plates	/img/products/1776857441261-wayntyx9rp.jpg	2026-04-22 11:30:45.218	2026-04-22 11:30:45.218
cmo9z2ijg000f96pdral7g6xj	GRAF PLASTINA Ø 82/25		{graf}	plates	/img/products/1776857464186-wytaoro2e09.jpg	2026-04-22 11:31:25.66	2026-04-22 11:31:25.66
cmo9z31ri000g96pdjgt9475w	GRAF PLASTINA Ø 50/15		{graf}	plates	/img/products/1776857508487-83omo42b7sb.jpg	2026-04-22 11:31:50.574	2026-04-22 11:31:50.574
cmob2l4n6000h96pd09jjv5xa	ASPRO PLASTINA Ø 90/40		{aspro}	plates	/img/products/1776923851706-b4gy5cu4nsw.jpg	2026-04-23 05:57:39.138	2026-04-23 05:57:39.138
cmob2li4l000i96pdgcge8zsv	ASPRO PLASTINA Ø 75		{aspro}	plates	/img/products/1776923934291-8oyo5qfy4ww.jpg	2026-04-23 05:57:56.613	2026-04-23 05:58:56.349
cmob2nsb5000j96pda92v490f	ASPRO PLASTINA Ø 65/25		{aspro}	plates	/img/products/1776923978632-j68dua6xmoq.jpg	2026-04-23 05:59:43.121	2026-04-23 05:59:43.121
cmob2p7lq000m96pd81fhoj0b	 ASPRO PLASTINA Ø 24/5		{aspro}	plates	/img/products/1776924048034-wr8ws4mvop.jpg	2026-04-23 06:00:49.598	2026-04-23 06:00:49.598
cmob6uajq000n96pd4pobfy5e	SICHUAN SHATUN Z MODEL		{sichuan}	piston_parts	/img/products/1776930993517-xox08z8xewh.jpg	2026-04-23 07:56:45.158	2026-04-23 07:56:45.158
cmob6zo17000p96pdjv1tri5g	TIANCHEN SHTOK 3 - 6 kg 1200 KOMPRESSORGA 3/4 STUPEN		{tianchen}	piston_parts	/img/products/1776931246153-svnyxulzw8s.jpg	2026-04-23 08:00:55.915	2026-04-23 08:01:20.087
cmob6wy5c000o96pd2qsez1kq	TIANCHEN SHTOK 1 - 3 kg 1200 KOMPRESSORGA 3/4 STUPEN		{tianchen}	piston_parts	/img/products/1776931103244-zzzq4itq03.jpg	2026-04-23 07:58:49.055	2026-04-23 08:01:29.35
cmob727bc000q96pdkk6k8ak6	SICHUAN SHTOK 3 - 6 kg 1200 KOMPRESSORGA 3/4 STUPEN		{sichuan}	piston_parts	/img/products/1776931373236-63nsyq3sju8.jpg	2026-04-23 08:02:54.216	2026-04-23 08:02:54.216
cmob7pio6000r96pdy3g7zakc	KWANGSHIN SHTOK GAYKASI		{kwangshin}	piston_parts	/img/products/1776932458182-1wuhyqq89a5.jpg	2026-04-23 08:21:02.022	2026-04-23 08:21:02.022
cmob7rfmc000s96pdbu110gnt	KWANGSHIN PORSHIN ORQA GAYKASI		{kwangshin}	piston_parts	/img/products/1776932547069-qjofom06l.jpg	2026-04-23 08:22:31.377	2026-04-23 08:22:31.377
cmob7uobb000t96pdif1zs132	KWANGSHIN GILZA 1 - 3 kg 1500 KOMPRESSORGA 4 STUPEN		{kwangshin}	piston_parts	/img/products/1776932690937-wgoqubpj9n.jpg	2026-04-23 08:25:02.615	2026-04-23 08:25:02.615
cmob80pzs000u96pdvbunh2mj	KWANGSHIN KERISKOP KOMPLECT		{kwangshin}	keriskop_pins	/img/products/1776932977493-2hgw8u5xtma.jpg	2026-04-23 08:29:44.728	2026-04-23 08:29:44.728
cmob82dc1000v96pdcvquzomv	TIANCHEN KERISKOP BEZ PALEC		{tianchen}	keriskop_pins	/img/products/1776933058584-ppovblm8br.jpg	2026-04-23 08:31:01.633	2026-04-23 08:31:01.633
cmob84d3l000w96pdd9ql2t7h	SICHUAN KERISKOP 1/2 STUPEN Z MODEL BEZ PALEC		{sichuan}	keriskop_pins	/img/products/1776933142956-cj4ass5i94.jpg	2026-04-23 08:32:34.641	2026-04-23 08:32:34.641
cmob858bd000x96pdr6fug1mg	 SICHUAN KERISKOP 4 STUPEN Z MODEL BEZ PALEC		{sichuan}	keriskop_pins	/img/products/1776933192982-wvuzt7y6nr9.jpg	2026-04-23 08:33:15.097	2026-04-23 08:33:15.097
cmob87b96000y96pd7lv9aa5l	TIANCHEN PALEC KERISKOP XAMA STUPENGA		{tianchen}	keriskop_pins	/img/products/1776933287291-mk403mvyc99.jpg	2026-04-23 08:34:52.218	2026-04-23 08:34:52.218
cmob884s2000z96pdfdk7il27	SICHUAN PALEC KERISKOP 		{sichuan}	keriskop_pins	/img/products/1776933329016-3pbmczpnipo.jpg	2026-04-23 08:35:30.482	2026-04-23 08:35:37.183
cmob8af8k001096pdrm4la1jj	KWANGSHIN SHTUCER		{kwangshin}	hoses_connections	/img/products/1776933425019-cgwc3tonouo.jpg	2026-04-23 08:37:17.348	2026-04-23 08:37:17.348
cmob8bl62001196pdhegy811j	XTOY SHTUCER		{kwangshin}	hoses_connections	/img/products/1776933484343-hz16s8a9cij.jpg	2026-04-23 08:38:11.689	2026-04-23 08:38:11.689
cmob8ew6j001296pd79cpslg2	KWANGSHIN KOLONKA SOEDINITEL KOTASI		{kwangshin}	hoses_connections	/img/products/1776933641239-vpbkfgzjdf9.jpg	2026-04-23 08:40:45.931	2026-04-23 08:40:45.931
cmob8geju001396pd9hdbmygb	KWANGSHIN KOLONKA SOEDINITEL KICHKINASI		{kwangshin}	hoses_connections	/img/products/1776933712535-v3xinx8ka7l.jpg	2026-04-23 08:41:56.394	2026-04-23 08:41:56.394
cmob8jpcd001496pdk6yn5u5f	KWANGSHIN SHLANG 40 сm 1/4 REZVA		{kwangshin}	hoses_connections	/img/products/1776933863600-bud5dcoejf5.jpg	2026-04-23 08:44:30.349	2026-04-23 08:44:30.349
cmob8k9f0001596pdv0yzq8xz	KWANGSHIN SHLANG 40 сm 3/8 REZVA		{kwangshin}	hoses_connections	/img/products/1776933892068-wo2d5e6f9d.jpg	2026-04-23 08:44:56.364	2026-04-23 08:44:56.364
cmob8ldr1001696pdr25w50cc	KWANGSHIN SHLANG 60 сm 3/8 REZVA		{kwangshin}	hoses_connections	/img/products/1776933941462-fafseej1qkh.jpg	2026-04-23 08:45:48.637	2026-04-23 08:45:48.637
cmob8mc91001796pd21hww8bo	KWANGSHIN SHLANG 5 m 		{kwangshin}	hoses_connections	/img/products/1776933991623-26jvlu8pwfk.jpg	2026-04-23 08:46:33.349	2026-04-23 08:46:33.349
cmob8nq86001996pd23hca08f	KWANGSHIN SHLANG 3 m		{kwangshin}	hoses_connections	/img/products/1776934049625-fzfks6430sw.jpg	2026-04-23 08:47:38.118	2026-04-23 08:47:38.118
cmob8qvay001a96pdr55t4s1u	KWANGSHIN KOLONKAGA RAZRIVNOY MUFTA		{kwangshin}	hoses_connections	/img/products/1776934237975-jabe6nkndp8.jpg	2026-04-23 08:50:04.666	2026-04-23 08:50:43.942
cmob8ubp3001b96pdkvdci43y	KWANGSHIN KOLONKAGA PURJINALI AKTIVATOR		{kwangshin}	actuators_solenoids	/img/products/1776934360134-v3aqsvtypa.jpg	2026-04-23 08:52:45.879	2026-04-23 08:52:45.879
cmob8wome001c96pd3tdghhlt	KWANGSHIN KOLONKA SCHYOTCHIGI		{kwangshin}	column_meters	/img/products/1776934469455-tzzeldvhc3h.jpg	2026-04-23 08:54:35.942	2026-04-23 08:54:35.942
cmob8ynfi001d96pdnkifqcnx	KWANGSHIN MAGNITNIY PUSKATEL KOLONKAGA		{kwangshin}	magnetic_starters	/img/products/1776934563616-3aag71u194.jpg	2026-04-23 08:56:07.71	2026-04-23 08:56:07.71
cmob8zlsp001e96pd6r1jos00	KWANGSHIN MAGNITNIY PUSKATEL KOMPRESSORGA		{kwangshin}	magnetic_starters	/img/products/1776934605948-xw8ugc0ezoa.jpg	2026-04-23 08:56:52.248	2026-04-23 08:56:52.248
cmob91j1z001f96pdcxzkhqj6	KWANGSHIN KOLONKA KLAVIATURA NAKLEYKASI 		{kwangshin}	electronics_psu	/img/products/1776934696870-de44htai93f.jpg	2026-04-23 08:58:22.007	2026-04-23 08:58:22.007
cmob93ceb001g96pdi40qsl6v	KWANGSHIN KOLONKA KLAVIATURA PLATASI		{kwangshin}	electronics_psu	/img/products/1776934730849-rlyr35bcdnh.jpg	2026-04-23 08:59:46.691	2026-04-23 08:59:46.691
cmob94esq001h96pd2b0yhu28	KWANGSHIN KOLONKA BLOK PITANIYASI		{kwangshin}	electronics_psu	/img/products/1776934829672-pwj9h0s5pqo.jpg	2026-04-23 09:00:36.458	2026-04-23 09:00:36.458
cmob96k1t001i96pd6quufo00	KWANGSHIN KOLONKA GAZ AJRATUVCHISI		{kwangshin}	column_meters	/img/products/1776934932340-dxbj063g0b5.jpg	2026-04-23 09:02:16.577	2026-04-23 09:02:16.577
cmob992bm001j96pd9awhaa57	KWANGSHIN KOLONKA KABEL		{kwangshin}	electronics_psu	/img/products/1776935022238-7kgnyi3hoed.jpg	2026-04-23 09:04:13.57	2026-04-23 09:04:13.57
cmobg6y6y001k96pdzt1i3fcx	KWANGSHIN STUPEN ORTASIDAGI PROKLADKA		{kwangshin}	gaskets	/img/products/1776946707705-lri36jo2un.jpg	2026-04-23 12:18:32.218	2026-04-23 12:18:32.218
cmobgbkww001l96pd5xii0vr2	REZINOVAYA MEMBRANA (DIAFRAGMA)		{kwangshin}	gaskets	/img/products/1776946926865-kmvmksepceo.jpg	2026-04-23 12:22:08.288	2026-04-23 12:22:08.288
cmobgegwm001m96pd2iyjercq	AKKUMULYATOR DAVLENIYA KORSATGICH		{sichuan,tianchen,kwangshin}	temp_controllers	/img/products/1776947057921-34ejckvzvai.jpg	2026-04-23 12:24:23.062	2026-04-23 12:24:23.062
cmobgghn3001n96pd7fjq7tjn	VOLTMETR		{sichuan,tianchen}	amperator	/img/products/1776947147976-oo61mln0c5.jpg	2026-04-23 12:25:57.327	2026-04-23 12:25:57.327
cmobgh2le001o96pd8flrtllf	AMPERATOR		{sichuan,tianchen}	amperator	/img/products/1776947170475-eaaon4r0wqs.jpg	2026-04-23 12:26:24.482	2026-04-23 12:26:24.482
cmob8n0rk001896pd7fvh0ddm	KWANGSHIN SHLANG 4 m		{kwangshin}	hoses_connections	/img/products/1776934021403-p84lpek8xo.jpg	2026-04-23 08:47:05.12	2026-05-15 11:24:04.978
cmobgithi001q96pdw7c29k5d	GAZ DETECTOR		{sichuan,farnova,graf,aspro,tianchen,tianyi}	gas_detectors	/img/products/1776947258801-s273tb7mlnq.jpg	2026-04-23 12:27:45.99	2026-04-23 12:27:45.99
cmobgi4en001p96pd1gnv64f4	GAZ DETECTOR		{kwangshin,tianchen,tianyi,sichuan,farnova,graf,aspro}	gas_detectors	/img/products/1776947231247-m14cf2hj41e.jpg	2026-04-23 12:27:13.487	2026-04-23 12:27:58.57
cmobgjzax001r96pdv7cjf7c5	TERMOSTAT		{kwangshin}	thermostat	/img/products/1776947316444-tv8e6s6a9nc.jpg	2026-04-23 12:28:40.185	2026-04-23 12:28:40.185
cmobgoirc001s96pdnwliwhn6	KWANGSHIN 203 MONIFOLD		{kwangshin}	actuators_solenoids	/img/products/1776947527588-thx84919ots.jpg	2026-04-23 12:32:12.024	2026-04-23 12:32:12.024
cmobgqgii001t96pdmmtwb00e	KWANGSHIN VAL SHATUNOY BOLT		{kwangshin}	piston_parts	/img/products/1776947608514-a67ybjn9x0l.jpg	2026-04-23 12:33:42.426	2026-04-23 12:33:42.426
cmobgs9vq001u96pdi6oksjr7	KWANGSHIN KOMPRESSORIGA MASLENIY NASOS DAVLENIYA SALNIK		{kwangshin}	lube_pump	/img/products/1776947690062-zc3uw416g3p.jpg	2026-04-23 12:35:07.142	2026-04-23 12:35:07.142
cmobgwmui001v96pds5e6edy5	LUBRICATOR NASOS		{kwangshin}	lube_pump	/img/products/1776947907453-x2px8h5ko7h.jpg	2026-04-23 12:38:30.57	2026-04-23 12:38:30.57
cmobgx6lj001w96pd46cydbyr	LUBRICATOR NASOS		{sichuan,tianchen}	lube_pump	/img/products/1776947934426-sfyq1aztp8i.jpg	2026-04-23 12:38:56.167	2026-04-23 12:38:56.167
cmobgyp02001x96pd5p674b4c	AKTIVATOR PURJINASIZ XTOY PNEVMATIKA		{kwangshin,sichuan,tianchen,farnova,graf,tianyi,aspro}	actuators_solenoids	/img/products/1776947999403-3vof1hci4gd.jpg	2026-04-23 12:40:06.674	2026-04-23 12:40:06.674
cmobh26vc001y96pd88gt4hgw	KRICHATKA SICHUAN VA TIANCHEN  KOMPRESSORLARINI VADIMNOY  VA ANTIFRIZ  UCHUN NASOS EHTIYOT QISMI		{sichuan,tianchen}	antifreeze_pumps	/img/products/1776948158549-gp46pw4wcfb.jpg	2026-04-23 12:42:49.8	2026-04-23 12:42:49.8
cmobh4ojl001z96pd2dqed4ji	TIANCHEN TENT		{tianchen}	temp_controllers	/img/products/1776948283299-oe05pkgpbqf.jpg	2026-04-23 12:44:46.017	2026-04-23 12:44:46.017
cmobh6m66002096pdh3gbilw9	TIANCHEN KOMPRESSORIGA VADIMNOY NASOS 2.5 KW		{tianchen}	antifreeze_pumps	/img/products/1776948342278-l4ler5p6s7e.jpg	2026-04-23 12:46:16.254	2026-04-23 12:46:16.254
cmobh8rkm002196pdet9f1w9k	TIANCHEN VA SICHUAN KOMPRESSORLARIGA MUFTA  ELASTIK REZINA		{sichuan,tianchen}	gaskets	/img/products/1776948472714-qnxgltz1rv.jpg	2026-04-23 12:47:56.566	2026-04-23 12:47:56.566
cmobhc9k6002296pddspskyiw	SICHUAN MASLOSYOMNIK Ø60		{sichuan}	seal_blocks_cups	/img/products/1776948634063-acgu2ympdhc.jpg	2026-04-23 12:50:39.846	2026-04-23 12:50:39.846
cmobhd1xe002396pd1m8vsty3	 SICHUAN MASLOSYOMNIK Ø45		{sichuan}	seal_blocks_cups	/img/products/1776948673276-zkc3po6mjtb.jpg	2026-04-23 12:51:16.61	2026-04-23 12:51:16.61
cmobhg28c002496pdvcpk3uzd	KWANGSHIN KOMPRESSORNI YANGI MODEL PKA VA RADIATOR SOEDENITEL		{kwangshin}	cooling_system	/img/products/1776948814058-qo90x6unp1p.jpg	2026-04-23 12:53:36.972	2026-04-23 12:53:36.972
cmobhi175002596pdsigsw5pe	KWANGSHIN 203 MONIFOLD BILAN AKTIVATOR ORTASIDAGI SOEDENITEL		{kwangshin}	actuators_solenoids	/img/products/1776948907995-9p0qvhjnq0f.jpg	2026-04-23 12:55:08.945	2026-04-23 12:55:08.945
cmobhk4i8002696pdgnaj5qvq	TRUBA Ø  19 ULANISH JOYI		{kwangshin,sichuan,farnova,graf,aspro,tianchen,tianyi}	fittings	/img/products/1776948996146-wrfvksk0yhl.jpg	2026-04-23 12:56:46.544	2026-04-23 12:56:46.544
cmobhm59l002796pd75tbh07r	TRUBA Ø 19 ULANISH JOYI  3 TARAF ULAB BERUVCHI		{kwangshin,sichuan,farnova,graf,aspro,tianchen,tianyi}	fittings	/img/products/1776949097660-zkr1mxvlqm.jpg	2026-04-23 12:58:20.841	2026-04-23 12:58:20.841
cmobi46er002896pd92xzanep	TRUBA Ø 19 ULANISH JOYI BIR TARAPI REZVALI		{kwangshin,sichuan,farnova,aspro,tianchen,tianyi,graf}	fittings	/img/products/1776949928051-evklot6ksmf.jpg	2026-04-23 13:12:22.131	2026-04-23 13:12:22.131
cmobi7fn6002996pdjyozif8e	TRUBA Ø 19 ULANISH JOYI BIR BIRIGA ULASH UCHUN		{kwangshin,sichuan,farnova,graf,aspro,tianchen,tianyi}	fittings	/img/products/1776950088925-qlbdvmswinq.jpg	2026-04-23 13:14:54.066	2026-04-23 13:14:54.066
cmobiczcm002b96pd2md3qgek	KWANGSHIN SALNIY BLOK CHASHKA 5 x 5 KISMI VA SHPILKASI		{kwangshin}	seal_blocks_cups	/img/products/1776950347988-hgffmm5zpn6.jpg	2026-04-23 13:19:12.886	2026-04-23 13:19:12.886
cmobieb8n002c96pdvs55lij0	KWANGSHIN SALNIY BLOK CHASHKA KOMPLEKT		{kwangshin}	seal_blocks_cups	/img/products/1776950411071-81a6yzk7842.jpg	2026-04-23 13:20:14.951	2026-04-23 13:20:14.951
cmobiakib002a96pdua1iiqol	KWANGSHIN SALNIY BLOK KOREA		{kwangshin}	seal_blocks_cups	/img/products/1776950230304-elrf03mhxds.jpg	2026-04-23 13:17:20.339	2026-04-23 13:20:31.922
cmobifwna002d96pd3ia8i79g	KWANGSHIN SALNIY BLOK XTOY		{kwangshin}	seal_blocks_cups	/img/products/1776950486015-r65ur676o8.jpg	2026-04-23 13:21:29.35	2026-04-23 13:21:29.35
cmp6vkfss00009zpd209ukclm	KWANGSHIN GILZA С4 0,2-2 kg 1880  Ø58 		{kwangshin}	piston_parts	/img/products/1778846980286-5fsdqjsrqvw.jpg	2026-05-15 12:09:47.26	2026-05-15 12:09:47.26
cmp6vmhjy00019zpd7wvy5cin	KWANGSHIN GILZA YANGI MODEL С2 1-3 kg 1100 Ø50   49 razmer shtok  		{kwangshin}	piston_parts	/img/products/1778847082102-ptou6ppdnsa.jpg	2026-05-15 12:11:22.845	2026-05-15 12:11:22.845
cmp6vovmy00029zpdcwexy40c	KWANGSHIN GILZA С2 1-3 kg 1100  Ø44 		{kwangshin}	piston_parts	/img/products/1778847189524-80dvyzm92ly.jpg	2026-05-15 12:13:14.41	2026-05-15 12:13:14.41
cmp6vqost00039zpdbbyktr88	KWANGSHIN GILZA С4 1-3 kg 1500  Ø38		{kwangshin}	piston_parts	/img/products/1778847276440-xj2rh2cs5m.jpg	2026-05-15 12:14:38.861	2026-05-15 12:14:38.861
cmp6vttmy00049zpd52mr76uz	KWANGSHIN KOLONKA EKRAN		{kwangshin}	electronics_psu	/img/products/1778847421720-dowggqq1627.jpg	2026-05-15 12:17:05.098	2026-05-15 12:17:05.098
cmp6vv0qm00059zpdcsu89bbh	KWANGSHIN KOLONKA PLATA		{kwangshin}	electronics_psu	/img/products/1778847476217-r2xbufdmlt.jpg	2026-05-15 12:18:00.958	2026-05-15 12:18:00.958
\.


--
-- Data for Name: User; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public."User" (id, email, password, "createdAt") FROM stdin;
\.


--
-- Data for Name: _prisma_migrations; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public._prisma_migrations (id, checksum, finished_at, migration_name, logs, rolled_back_at, started_at, applied_steps_count) FROM stdin;
36a1be5c-f9f7-4b35-85ec-957d066eea28	5873aaf8cbdd80c59aa83d734052e01b451a5515428d3ef7e825e56da9291f96	2026-03-30 11:20:22.549703+00	20260308122937_init	\N	\N	2026-03-30 11:20:22.517393+00	1
\.


--
-- Name: Product Product_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."Product"
    ADD CONSTRAINT "Product_pkey" PRIMARY KEY (id);


--
-- Name: User User_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."User"
    ADD CONSTRAINT "User_pkey" PRIMARY KEY (id);


--
-- Name: _prisma_migrations _prisma_migrations_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public._prisma_migrations
    ADD CONSTRAINT _prisma_migrations_pkey PRIMARY KEY (id);


--
-- Name: User_email_key; Type: INDEX; Schema: public; Owner: postgres
--

CREATE UNIQUE INDEX "User_email_key" ON public."User" USING btree (email);


--
-- PostgreSQL database dump complete
--

\unrestrict VVrgrO6MZ50o8R0gdpWluZoIzhE7IMw2X845nJFqDon8gb0zaFvYVZA9hKmcxhI

