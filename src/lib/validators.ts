// lib/validators.ts
import { z } from "zod";

export const ProductSchema = z.object({
	name: z.string().min(1, "Nom majburiy"),
	description: z.string().optional().default(""),
	brand: z.array(
    z.enum(["kwangshin", "tianyi", "sichuan", "tianchen", "farnova", "aspro", "graf"], {
      message: "Noto'g'ri brend",
    })
  ).min(1, "Kamida bitta brend tanlang"),
	type: z.enum(
		[
			"valves_in_out",
			"valves_check",
			"valves_safety",
			"piston_parts",
			"plates",
			"inserts",
			"keriskop_pins",
			"piston_rings",
			"copper_rings",
			"seal_rubbers",
			"gaskets",
			"seal_blocks_cups",
			"manometers",
			"pressure_sensors",
			"temp_controllers",
			"gas_detectors",
			"measuring_devices",
			"amperator",
			"thermostat",
			"column_meters",
			"cranes",
			"fittings",
			"hoses_connections",
			"actuators_solenoids",
			"magnetic_starters",
			"electronics_psu",
			"repair_kits",
			"filters",
			"lube_pump",
			"cooling_system",
			"antifreeze_pumps",
		],
		{
			error: "Noto'g'ri tur",
		}
	),
	image: z.string().max(500).optional().default(""),
});

export const ProductUpdateSchema = ProductSchema.partial();

export const LoginSchema = z.object({
	email: z.string().email("Email noto'g'ri"),
	password: z.string().min(1, "Parol majburiy"),
});

export type ProductInput = z.infer<typeof ProductSchema>;
export type LoginInput = z.infer<typeof LoginSchema>;