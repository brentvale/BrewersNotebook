# encoding: UTF-8
# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 20161220172226) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "batches", force: :cascade do |t|
    t.string   "name_of_beer",    null: false
    t.string   "type_of_brewing", null: false
    t.integer  "gallons",         null: false
    t.datetime "created_at",      null: false
    t.datetime "updated_at",      null: false
  end

  create_table "ingredient_usages", force: :cascade do |t|
    t.integer  "ingredient_id",    null: false
    t.integer  "batch_id",         null: false
    t.string   "quantity",         null: false
    t.string   "time_of_addition", null: false
    t.string   "stage_of_brewing", null: false
    t.datetime "created_at",       null: false
    t.datetime "updated_at",       null: false
  end

  add_index "ingredient_usages", ["batch_id"], name: "index_ingredient_usages_on_batch_id", using: :btree
  add_index "ingredient_usages", ["ingredient_id"], name: "index_ingredient_usages_on_ingredient_id", using: :btree

  create_table "ingredients", force: :cascade do |t|
    t.string   "ingredient_name",                 null: false
    t.string   "type_of_ingredient", default: "", null: false
    t.datetime "created_at",                      null: false
    t.datetime "updated_at",                      null: false
  end

end
