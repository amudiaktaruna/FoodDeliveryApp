const detail = 'SELECT items.name_item,categories.name_category ,restaurants.name_rest,  items.rating, items.image, items.price, items.desc_item, items.created_on FROM items INNER JOIN restaurants ON items.id_restaurant=restaurants.id_restaurant INNER JOIN categories ON items.id_category=categories.id_category WHERE items.id_item=?'
const add = 'INSERT INTO items (id_category, id_restaurant, name_item, price, desc_item,image, created_on,updated_on) VALUES (?,?,?,?,?,?,?,?)'
const edit = `UPDATE items SET id_category=?, id_restaurant=?, name_item=?, price=?, desc_item=?, image=?, updated_on=? WHERE id_item=?`
const dlt = 'DELETE FROM items where id_item=?'
const showall = `SELECT items.name_item,restaurants.name_rest, items.price, items.image, items.rating FROM items INNER JOIN restaurants ON restaurants.id_restaurant=items.id_restaurant`

const name_item_asc = `SELECT items.name_item,restaurants.name_rest, items.image, items.rating, items.price FROM restaurants INNER JOIN items ON items.id_restaurant=restaurants.id_restaurant ORDER BY name_item ASC`
const price_asc = `SELECT items.name_item,restaurants.name_rest, items.image, items.rating, items.price FROM restaurants INNER JOIN items ON items.id_restaurant=restaurants.id_restaurant ORDER BY price ASC`
const rating_asc = `SELECT items.name_item,restaurants.name_rest, items.image, items.rating, items.price FROM restaurants INNER JOIN items ON items.id_restaurant=restaurants.id_restaurant ORDER BY rating ASC`
const updated_on_asc = `SELECT items.name_item,restaurants.name_rest, items.image, items.rating, items.price FROM restaurants INNER JOIN items ON items.id_restaurant=restaurants.id_restaurant ORDER BY items.updated_on ASC`


const name_item_desc = `SELECT items.name_item,restaurants.name_rest, items.image, items.rating, items.price FROM restaurants INNER JOIN items ON items.id_restaurant=restaurants.id_restaurant ORDER BY name_item DESC`
const price_desc = `SELECT items.name_item,restaurants.name_rest, items.image, items.rating, items.price FROM restaurants INNER JOIN items ON items.id_restaurant=restaurants.id_restaurant ORDER BY price DESC`
const rating_desc = `SELECT items.name_item,restaurants.name_rest, items.image, items.rating, items.price FROM restaurants INNER JOIN items ON items.id_restaurant=restaurants.id_restaurant ORDER BY rating DESC`
const updated_on_desc = `SELECT items.name_item,restaurants.name_rest, items.image, items.rating, items.price FROM restaurants INNER JOIN items ON items.id_restaurant=restaurants.id_restaurant ORDER BY items.updated_on DESC`


module.exports = {detail,add,edit,dlt,showall,name_item_asc,price_asc,rating_asc,updated_on_asc,name_item_desc,price_desc,rating_desc,updated_on_desc}

